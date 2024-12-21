import {
  Alert,
  AlertDismiss,
  AlertIcon,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Divider,
  Input,
  InputIcon,
  Label,
  toast,
} from "keep-react";
import { Envelope, Image, Lock, Person } from "phosphor-react";
import { useContext, useState } from "react";
import { FaGoogle, FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const Register = () => {
  const {
    setUser,
    setErrorMessage,
    errorMessage,
    handleCreateAccount,
    handleProfileUpdate,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  // Handle Register Form
  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const photo = event.target.photo.value;
    const password = event.target.password.value;

    setErrorMessage(null);

    // Check password validation
    if (password.length < 6) {
      return setErrorMessage(" Password must be used 6 characters");
    }
    const CheckPassword = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!CheckPassword.test(password)) {
      return setErrorMessage(
        "Must be used one capital, and one lowercase letter"
      );
    }

    // Create Account with email and password
    handleCreateAccount(email, password)
      .then((result) => {
        setUser(result.user);
        // Profile Update
        handleProfileUpdate({
          displayName: name,
          photoURL: photo,
        });
        toast.success(`Hello, ${name}! Let's make your dreams a reality`);
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(error.message.slice(22, 44));
      });
  };

  return (
    <div>
      <Helmet>
        <title>Register | Career Climb</title>
        <link rel="canonical" href="/register" />
      </Helmet>
      <div className="w-11/12 mx-auto space-y-5 mt-4">
        {errorMessage && (
          <Alert withBg={true} color="error">
            <div className="flex gap-3">
              <AlertIcon />
              <p>{errorMessage}</p>
            </div>
            <AlertDismiss onClick={() => setErrorMessage(null)} />
          </Alert>
        )}
      </div>
      <Card className="max-w-sm mx-auto mt-12">
        <CardContent className="space-y-3">
          <CardHeader className="text-center">
            <CardTitle>Register</CardTitle>
          </CardHeader>

          <Divider>Or</Divider>
          <form onSubmit={handleRegisterSubmit} className="space-y-2">
            <fieldset className="space-y-1">
              <Label htmlFor="email">Full Name</Label>
              <div className="relative">
                <Input
                  name="name"
                  type="name"
                  placeholder="Enter Full Name"
                  className="ps-11"
                />
                <InputIcon>
                  <Person size={19} color="#AFBACA" />
                </InputIcon>
              </div>
            </fieldset>
            <fieldset className="space-y-1">
              <Label htmlFor="email">Email*</Label>
              <div className="relative">
                <Input
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  className="ps-11"
                />
                <InputIcon>
                  <Envelope size={19} color="#AFBACA" />
                </InputIcon>
              </div>
            </fieldset>
            <fieldset className="space-y-1">
              <Label htmlFor="email">Photo URL</Label>
              <div className="relative">
                <Input
                  name="photo"
                  type="text"
                  placeholder="Your Photo URL"
                  className="ps-11"
                />
                <InputIcon>
                  <Image size={19} color="#AFBACA" />
                </InputIcon>
              </div>
            </fieldset>
            <fieldset className="space-y-1">
              <Label htmlFor="password">Password*</Label>
              <div className="relative">
                <Input
                  name="password"
                  placeholder="Enter password"
                  type={show ? "text" : "password"}
                  className="ps-11"
                />
                <InputIcon>
                  <Lock size={19} color="#AFBACA" />
                </InputIcon>
                <span
                  onClick={() => setShow(!show)}
                  className="absolute top-3 right-4 text-xl"
                >
                  {show ? <IoIosEyeOff /> : <IoIosEye />}
                </span>
              </div>
            </fieldset>

            <Button type="submit" className="!mt-3 block w-full bg-[#4E21FF]">
              Register
            </Button>
          </form>
          <div className="flex gap-2 justify-center ">
            <p>Already have an account ? </p>
            <Link to="/login" className="text-primary-600">
              Log in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;

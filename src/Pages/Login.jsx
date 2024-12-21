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
import { Envelope, Lock } from "phosphor-react";
import { useContext, useState } from "react";
import { FaGoogle, FaTwitter } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const Login = () => {
  const {
    setUser,
    setErrorMessage,
    errorMessage,
    handleSigninGoogle,
    handleSigninTwitter,
    handleSigninEmailPassword,
    emailRef,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(false);

  // Handle Google Login Functionality
  const handleGoogleLogin = () => {
    handleSigninGoogle()
      .then((result) => {
        setUser(result.user);
        toast.success(`Login Successful`);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => setErrorMessage(error.message));
  };

  // Handle Twitter Login Functionality
  const handleTwitterLogin = () => {
    handleSigninTwitter()
      .then((result) => {
        setUser(result.user);
        toast.success(`Login Successful`);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => setErrorMessage(error));
  };

  // Handle Login Form
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    setErrorMessage(null);
    // Check password validation
    const CheckPassword = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!CheckPassword.test(password)) {
      return setErrorMessage(
        "Must be used one capital, and one lowercase letter"
      );
    }

    // Sign in with emaill & password
    handleSigninEmailPassword(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success(`Login Successful`);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => setErrorMessage(error.message.slice(22, 42)));
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    navigate(`forgot?email=${email}`);
  };

  return (
    <div>
      <Helmet>
        <title>Login | Career Climb</title>
        <link rel="canonical" href="/login" />
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
            <CardTitle>Log In</CardTitle>
          </CardHeader>
          <div className="flex items-center justify-between gap-3">
            <Button
              onClick={handleGoogleLogin}
              variant="outline"
              color="secondary"
              className="w-full"
            >
              <FaGoogle size={20} className="mr-1.5 text-[#4285F4] font-bold" />
              Google
            </Button>
            <Button
              onClick={handleTwitterLogin}
              variant="outline"
              color="secondary"
              className="w-full"
            >
              <FaTwitter size={20} className="mr-1.5 text-[#1DA1F2]" />
              Twitter
            </Button>
          </div>
          <Divider>Or</Divider>
          <form onSubmit={handleLoginSubmit} className="space-y-2">
            <fieldset className="space-y-1">
              <Label htmlFor="email">Email*</Label>
              <div className="relative">
                <Input
                  name="email"
                  type="email"
                  ref={emailRef}
                  placeholder="Enter email"
                  className="ps-11"
                />
                <InputIcon>
                  <Envelope size={19} color="#AFBACA" />
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
            <div onClick={handleForgotPassword}>
              <Label htmlFor="password">Forgot Password</Label>
            </div>
            <Button type="submit" className="!mt-3 block w-full bg-[#4E21FF]">
              Log in
            </Button>
          </form>
          <div className="text-center">
            <Link to="/register" className="text-primary-600 text-center">
              Create your account
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarList,
  Tooltip,
  TooltipAction,
  TooltipContent,
  TooltipProvider,
} from "keep-react";
import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { MdPerson2 } from "react-icons/md";

const NavbarComponent = () => {
  const { user, handleSignOut } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Navbar className="bg-[#F2F6FD]">
      <NavbarContainer className="mx-auto p-2 md:p-0 ">
        <NavbarBrand>
          {/* <img src={KeepLogo} alt="keep" /> */}
          <Link to="/" className="text-2xl text-[#ED4C67] font-semibold">
            Job Portal
          </Link>
        </NavbarBrand>
        <NavbarList className="space-x-5 ">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/myapplication">My Application</NavLink>
          <NavLink to="/addjob">Add Job</NavLink>
          <NavLink to="/mypostjob">My Post Job</NavLink>
        </NavbarList>
        <NavbarList>
          <div>
            {user && user.email ? (
              <TooltipProvider>
                <Tooltip>
                  <TooltipAction asChild>
                    <Avatar>
                      <img referrerPolicy="no-referrer" src={user?.photoURL} />
                      <AvatarFallback>
                        <MdPerson2 className="text-3xl" />
                      </AvatarFallback>
                    </Avatar>
                  </TooltipAction>
                  <TooltipContent
                    side="top"
                    className="bg-metal-300 space-y-4 text-center"
                  >
                    <h2>{user && user.displayName}</h2>
                    <Button onClick={handleSignOut} className="text-white">
                      Log Out
                    </Button>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : (
              <div className="space-x-4">
                <Button
                  onClick={() => navigate("/login")}
                  color="primary"
                  className="text-white"
                >
                  Log In
                </Button>
                <Button
                  onClick={() => navigate("/register")}
                  color="primary"
                  className="text-white"
                >
                  Register
                </Button>
              </div>
            )}
          </div>
        </NavbarList>
        <NavbarCollapseBtn />

        <NavbarCollapse className="bg-primary-25 ">
          <div>
            {user && (
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage
                    referrerPolicy="no-referrer"
                    src={user?.photoURL}
                  />
                  <AvatarFallback>
                    <MdPerson2 className="text-3xl" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p>{user?.displayName}</p>
                  <p>{user?.email}</p>
                </div>
              </div>
            )}
          </div>

          <NavLink to="/">Home</NavLink>
          <NavLink to="/myapplication">My Application</NavLink>
          <NavLink to="/addjob">Add Job</NavLink>
          <NavLink to="/mypostjob">My Post Job</NavLink>
          <div>
            {user && user.email ? (
              <Button onClick={handleSignOut} className="text-[#ffffff]">
                Log Out
              </Button>
            ) : (
              <Button
                onClick={() => navigate("/login")}
                className="text-[#ffffff]"
              >
                Log In
              </Button>
            )}
          </div>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
};

export default NavbarComponent;

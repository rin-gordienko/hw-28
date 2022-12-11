import { NavLink } from "react-router-dom";
import { useContext } from "react";

import AuthContext from "../contexts/AuthContext";
import LoginForm from "./LoginForm";
import Logo from "./Logo";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";

const Header = () => {
  const { isLoggedIn, userInfo, logoutUser, showLoginForm, isVisible } =
    useContext(AuthContext);
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={8}>
          <NavLink to="/" end>
            <Link>
              <Logo />
            </Link>
            <Logo />
          </NavLink>
        </Grid>
        <Grid item xs={1}>
          <NavLink to="flights" end>
            <Link>Flights</Link>
          </NavLink>
        </Grid>
        <Grid item xs={1}>
          <NavLink to="users" end>
            <Link>Users</Link>
          </NavLink>
        </Grid>
        {isLoggedIn && (
          <Grid item xs={1}>
            <Button onClick={logoutUser} to="sign-in">
              Log Out
            </Button>
            <Avatar src={userInfo.image} alt=""></Avatar>
          </Grid>
        )}
        {!isLoggedIn && (
          <Grid item xs={1}>
            <Button onClick={showLoginForm} to="log-in">
              Log in
            </Button>
          </Grid>
        )}
      </Grid>
      {isVisible && <LoginForm />}
    </>
  );
};

export default Header;

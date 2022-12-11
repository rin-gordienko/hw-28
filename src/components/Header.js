import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";

import AuthContext from "../contexts/AuthContext";

import Logo from "./Logo";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";

const Header = () => {
  const { isLoggedIn, userInfo, logoutUser } = useContext(AuthContext);
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
          <NavLink to="hotels" end>
            <Link>Hotels</Link>
          </NavLink>
        </Grid>
        <Grid item xs={1}>
          <NavLink to="packages" end>
            <Link>Packages</Link>
          </NavLink>
        </Grid>
        {isLoggedIn && (
          <Grid item xs={1}>
            <Button onClick={logoutUser} to="sign-in">
              Log Out
            </Button>
            <img src={userInfo.image} alt=""></img>
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
    </>
  );
};

export default Header;

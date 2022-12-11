import { NavLink } from "react-router-dom";
import { useContext } from "react";
import "../index.css"
import AuthContext from "../contexts/AuthContext";
import LoginForm from "./LoginForm";
import Logo from "./Logo";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";


const Header = () => {
  const { isLoggedIn, userInfo, logoutUser, showLoginForm, isVisible } =
    useContext(AuthContext);
  return (
    <>
      <Grid mt="20px" container spacing={0}>
        <Grid item xs={8}>
          <NavLink to="/" end>
            <Logo />
          </NavLink>
        </Grid>
        <Grid item xs={1}>
          <NavLink className="menu-link" to="flights">
            <Typography variant="body2">Flights</Typography>
          </NavLink>
        </Grid>
        <Grid item xs={1}>
          <NavLink className="menu-link" to="users">
            <Typography variant="body2">Users</Typography>
          </NavLink>
        </Grid>
        {isLoggedIn && (
          <>
            <Grid item xs={1}>
              <Avatar src={`${userInfo.image}`} alt=""></Avatar>
            </Grid>
            <Grid item xs={1}>
              <Button variant="contained" onClick={logoutUser}>
                Log Out
              </Button>
            </Grid>
          </>
        )}
        {!isLoggedIn && (
          <Grid item xs={1}>
            <NavLink className="menu-link" to="login">
              <Button variant="contained" onClick={showLoginForm}>
                Log in
              </Button>
            </NavLink>
          </Grid>
        )}
      </Grid>

      {isVisible && <LoginForm />}
    </>
  );
};

export default Header;

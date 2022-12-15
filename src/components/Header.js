import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import "../index.css";
import AuthContext from "../contexts/AuthContext";
import LoginForm from "./LoginForm";
import Logo from "./Logo";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const { isLoggedIn, userInfo, logoutUser } = useContext(AuthContext);

  const [isVisible, setVisible] = useState(false);
  const showLoginForm = () => setVisible(true);
  const closeLoginForm = () => setVisible(false);

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
        <Dialog open={isVisible} onClose={closeLoginForm}>
          <Box m="30px">
            <Grid
              display={"flex"}
              justifyContent={"space-between"}
              item
              xs={12}
            >
              <Typography variant="h3">Log in to Trimpa</Typography>
              <Button type="button" onClick={closeLoginForm}>
                {" "}
                <CloseIcon />{" "}
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                Tripma is totally free to use. Sign up using your email address
                or phone number below to get started.
              </Typography>
            </Grid>
            <LoginForm closeLoginForm={closeLoginForm} />
          </Box>
        </Dialog>
      </Grid>
    </>
  );
};

export default Header;

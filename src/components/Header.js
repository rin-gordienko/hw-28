import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const Header = () => {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <NavLink to="/" end>
            <Logo />
          </NavLink>
        </Grid>
        <Grid item xs={1}>
          <NavLink to="flights" end>
            Flights
          </NavLink>
        </Grid>
        <Grid item xs={1}>
          <NavLink to="hotels">Hotels</NavLink>
        </Grid>
        <Grid>
          <NavLink to="packages">Packages</NavLink>
        </Grid>
        <Grid item xs={1}>
          <Button to="sign-in">Sign in</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;

import { useForm, Controller } from "react-hook-form";
import { useContext } from "react";

import AuthContext from "../contexts/AuthContext";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const LoginForm = () => {
  const { handleSubmit, control } = useForm();

  const { loginUser } = useContext(AuthContext);

  const onSubmit = (credentials) => {
    loginUser(credentials);
  };

  const handleChangeContact = ({ target: { value } }) => {
    setContact(value);
  };

  const handleChangePassword = ({ target: { value } }) => {
    setPassword(value);
  };

  const handleClick = () => {
    closeLoginForm();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h4">Sign up for Trimpa</Typography>
      <TextField>
        Tripma is totally free to use. Sign up using your email address or phone
        number below to get started.
      </TextField>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Controller
            control={control}
            name="contact"
            rules={{ required: "The field is required" }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                onChange={handleChangeContact}
                {...field}
                fullWidth
                label="Email or phone number"
                variant="outlined"
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={4}>
          {" "}
          <Controller
            control={control}
            name="password"
            rules={{ required: "The field is required" }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                onChange={handleChangePassword}
                {...field}
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Grid>
        <Grid>
          <Button
            onClick={handleClick}
            type="submit"
            variant="outlined"
            size="large"
          >
            Sign in
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;

import { useForm, Controller } from "react-hook-form";
import { useContext } from "react";

import AuthContext from "../contexts/AuthContext";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CloseIcon from "@mui/icons-material/Close";

const LoginForm = () => {
  const { handleSubmit, control } = useForm();

  const { loginUser, closeLoginForm } = useContext(AuthContext);

  const onSubmit = (credentials) => {
    loginUser(credentials);
    closeLoginForm();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h4">Sign up for Trimpa</Typography>
      <Button type="button" onClick={closeLoginForm}>
        {" "}
        <CloseIcon />{" "}
      </Button>
      <Typography variant="subtitle-1">
        Tripma is totally free to use. Sign up using your email address or phone
        number below to get started.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Controller
            control={control}
            name="contact"
            rules={{ required: "The field is required" }}
            render={({ field, fieldState: { error } }) => (
              <TextField
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
          <Button type="submit" variant="outlined" size="large">
            Sign in
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;

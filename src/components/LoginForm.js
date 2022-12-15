import { useForm, Controller } from "react-hook-form";
import { useContext } from "react";

import AuthContext from "../contexts/AuthContext";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";


const LoginForm = ({closeLoginForm}) => {
  const { handleSubmit, control } = useForm();

  const { loginUser } = useContext(AuthContext);

  const onSubmit = ({ username, password }) => {
    loginUser({ username, password });
    closeLoginForm();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="username"
            rules={{ required: "The field is required" }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                type="text"
                fullWidth
                label="Username"
                variant="outlined"
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
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
        <Grid item xs={12}>
          <Button type="submit" variant="outlined" size="large">
            Log in
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;

import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

const Root = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

export default Root;

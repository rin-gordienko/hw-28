// !!!!!!!!
import AuthProvider from "./contexts/AuthProvider";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

import Root from "./routes/Root";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Flights from "./routes/Flights";
import Packages from "./routes/Packages";
import Hotels from "./routes/Hotels"



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "flights",
        element: <Flights />,
      },
      {
        path: "hotels",
        element: <Hotels />,
      },
      {
        path: "packages",
        element: <Packages />,
      },
      {
        path: "sign-in",
        element: <signIn />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </AuthProvider>
);
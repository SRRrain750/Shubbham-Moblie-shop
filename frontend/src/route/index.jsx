import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";  // 👈 correct path
import "../index.css";  // go up one folder
import SearchPage from "../pages/SearchPage.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import React from "react";
import ForgotPassword from "../pages/ForgotPassword.jsx";
import OtpVerification from "../pages/OtpVerification.jsx";
import ResetPassword from "../pages/ResetPassword.jsx";
import UserMenu from "../components/UserMenu.jsx";
import UserMenuMobile from "../pages/UserMenuMobile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> }, // default route
      {
        path: "search",
        element: <SearchPage />
      },

      {
        path: "login",
        element: <Login />
      },

      {
        path:"register",
        element:<Register />
      },
      {
        path:"forgot-password",
        element:<ForgotPassword />
      },
      {
        path:"verification-otp",
        element:<OtpVerification />
      },
      {
        path:"reset-password",
        element:<ResetPassword />
      },


      {
        path:"user",
        element:<UserMenuMobile/>
      }

    ]
  }
]);

export default router;

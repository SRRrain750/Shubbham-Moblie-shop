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
import Dashboard from "../components/Dashboard.jsx";
import Profile from "../pages/Profile.jsx";
import MyOrders from "../pages/MyOrders.jsx";
import Address from "../pages/Address.jsx";
import Category from "../pages/Category.jsx";
import SubCategory from "../pages/SubCategory.jsx";
import UploadProduct from "../pages/UploadProduct.jsx";
import ProductAdmin from "../pages/ProductAdmin.jsx";
import AdminPermission from "../layouts/AdminPermission.jsx";
import ProductListPage from "../pages/ProductListPage.jsx";
import ProductDisplayPage from "../pages/ProductDisplayPage.jsx";
import CartMobile from "../pages/CartMobile.jsx";
import CheckoutPage from "../pages/CheckoutPage.jsx";
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
      },

      {
        path:"dashboard",
        element:<Dashboard/>,
        children:[
          {
            path: "profile",
            element: <Profile />
          },

          {
            path: "my-orders",
            element: <MyOrders/>
          },
          {
            path: "address",
            element: <Address />
          },
          {
            path: "category",
            element:<AdminPermission><Category/></AdminPermission> 
          },

          {
            path: "subcategory",
            element: <AdminPermission><SubCategory/></AdminPermission>
          },
          {
            path: "upload-product",
            element: <AdminPermission><UploadProduct/></AdminPermission>
          },
          {
            path: "product",
            element: <AdminPermission><ProductAdmin/></AdminPermission>
          },

         
        ]
      },
      {
        path : ":category",
        children : [
             {
              path : ":subCategory",
              element :<ProductListPage/>
             }
        ]
      },
      // {
      //   path: "c/:category",
      //   children: [
      //     {
      //       path: "s/:subCategory",
      //       element: <ProductListPage/>
      //     }
      //   ]
      // },

      {
        path : "product/:product",
        element :<ProductDisplayPage/>
      },
      {
        path : "cart",
        element : <CartMobile/>

      },
      {
        path : "checkout",
        element : <CheckoutPage/>
      }

    ]
  }
]);

export default router;

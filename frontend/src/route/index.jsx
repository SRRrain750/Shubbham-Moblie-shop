import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";  // 👈 correct path
import "../index.css";  // go up one folder


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> } // default route
    ]
  }
]);

export default router;

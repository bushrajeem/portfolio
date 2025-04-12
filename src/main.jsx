import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Admin from "./dashboard/admin/Admin.jsx";
import Adminbanner from "./dashboard/admin/Adminbanner.jsx";
import AdminBlog from "./dashboard/admin/AdminBlog.jsx";
import AdminExperience from "./dashboard/admin/AdminExperience.jsx";
import AdminHome from "./dashboard/admin/AdminHome.jsx";
import "./index.css";

import Adminlogin from "./shared/Adminlogin.jsx";
import { Home } from "./pages/home/Home.jsx";


const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      { path: "*", element: <Admin /> },
      { path: "home", element: <AdminHome /> },
      { path: "banner", element: <Adminbanner /> },
      { path: "experience", element: <AdminExperience /> },
      { path: "portfolio", element: <AdminBlog /> },
    ],
  },
  { path: "/adminlogin", element: <Adminlogin /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

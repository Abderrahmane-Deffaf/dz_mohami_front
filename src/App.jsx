/* eslint-disable import/no-unresolved */
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import React from "react";
import Search from "./routes/Search";
import AvocatProfile from "./routes/AvocatProfile";
import UserDashboard from "./routes/UserDashboard";
import AvocatRegister from "./routes/AvocatRegister";
import Login from "./routes/Login";
import AvocatDashboard from "./routes/AvocatDashboard";
import AvocatEditProfile from "./routes/AvocatEditProfile";
import AdminLogin from "./routes/AdminLogin";
import AdminDashboard from "./routes/AdminDashboard";
import Root from "./routes/Root";
import AvocatDashboardRoot from "./routes/AvocatDashboardRoot";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import NotFound from "./components/reusable/NotFound";
import "./i18n";

const qureyClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement:<NotFound/>, 
    children: [
      {
        path: "/",
        element: <Home />, // ranim
      },
      {
        path: "/search",
        element: <Search />, // ranim
      },
      {
        path: "/avocat-profile/:avocatId",
        element: <AvocatProfile />, // ranim
      },
      {
        path: "/user-dashboard",
        element: <UserDashboard />, // ranim
      },
      {
        path: "/avocat-register",
        element: <AvocatRegister />, // abdou
      },
      {
        path: "/login",
        element: <Login />, // abdou
      },
    ],
  },

  {
    path: "/avocat-dashboard/:avocatId",
    element: <AvocatDashboardRoot />,
    children: [
      {
        path: "home",
        element: <AvocatDashboard />, // abdou
      },
      {
        path: "edit-profile",
        element: <AvocatEditProfile />, // abdou
      },
    ],
  },
  {
    path: "/admin-login",
    element: <AdminLogin />, // abdou
  },
  {
    path: "/admin-dashboard",
    element: <AdminDashboard />, // abdou
  },
]);

const container = document.getElementById("root");

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={qureyClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);

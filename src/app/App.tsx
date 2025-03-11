import { useState } from "react";
import "./App.css";
import AuthPage from "../pages/auth-page/AuthPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthPage />,
    },
    {
      path: "/dashboard",
      element: <DashboardPage />,
    },
  ]);
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

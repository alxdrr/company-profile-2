import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error-page.jsx"
import Home from "./pages/home.jsx";
import Services from "./pages/services.jsx";
import Portfolio from "./pages/portfolio.jsx";
import FAQ from "./pages/faq.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/services",
    element: <Services />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/faq",
    element: <FAQ />,
    errorElement: <ErrorPage />,
  },
]);
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

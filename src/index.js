import * as React from "react";
import * as ReactDOM from "react-dom/client";
import ErrorPage from "./error-page";
import App from "./App.js"
import Testpage from "./testpage.jsx"
import {
  createBrowserRouter,
  RouterProvider,
} 
from "react-router-dom";
import "./index.css";
import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "hello-world",
        element: <App />,
      },{
        path: "test",
        element: <Testpage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
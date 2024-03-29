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
import Root, { loader as rootLoader } from "./routes/root";
import {Testpage2, testdataLoader} from "./testpage2.js"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "hello-world",
        element: <App />,
      },{
        path: "test",
        element: <Testpage />,
      },{
        
        path: "test/:id",
        loader: testdataLoader,
        
        element: <Testpage2 />,
              
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
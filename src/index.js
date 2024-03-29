import * as React from "react";
import * as ReactDOM from "react-dom/client";
import ErrorPage from "./page/error-page.jsx";
import Hello from "./page/hello.js"
import Testpage from "./page/testpage.jsx"
import CounterPage from "./page/counter.jsx"
import CounterTotalPage from "./page/counter_total.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} 
from "react-router-dom";
import "./index.css";
import Root, { loader as rootLoader } from "./routes/root.jsx";
import {Testpage2, testdataLoader} from "./page/testpage2.js"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "hello-world",
        element: <Hello />,
      },{
        path: "test",
        element: <Testpage />,
      },{
        
        path: "test/:id",
        loader: testdataLoader,
        
        element: <Testpage2 />,
              
      },{
        
        path: "counte",
        element: <CounterPage />,
              
      },{
        path:"counte_total",
        element:<CounterTotalPage/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
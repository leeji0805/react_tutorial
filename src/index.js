import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Root from "./routes/root";
import { TestPage, testPageDataLoader }  from "./pages/TestPage";

const router = createBrowserRouter([
  // {
  //   path: "/hello-world",
  //   element: <div>Hello world!</div>,
  // },
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "hello",
        element: <div>Hello world!</div>,
      },
      {
        path: "test",
        element: <h1>test</h1>,
      },
      {
        path: "test/:id",
        loader: testPageDataLoader,
        element: <TestPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

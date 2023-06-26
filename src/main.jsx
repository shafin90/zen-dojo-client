import React from 'react'
import ReactDOM from 'react-dom/client'
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from './component/Layout/Layout';
import CustomNavbar from './component/Layout/CustomNavbar/CustomNavbar';
import AuthProvider from './component/Layout/AuthProvider/AuthProvider';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,

  },
]);





ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
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


import RegistrationPage from './component/RegistrationPage/RegistrationPage';
import Login from './component/Login/Login'
import AuthProvider from './component/AuthProvider/AuthProvider';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/registration',
        element:<RegistrationPage></RegistrationPage>
      }
    ]

  },
]);





ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
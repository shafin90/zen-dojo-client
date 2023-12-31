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
import Home from './component/Home/Home';
import Dashboard from './component/Dashboard/Dashboard';
import ManageClasses from './component/ManageClasses/ManageClasses';
import ManageUsers from './component/ManageUsers/ManageUsers';
import AddClass from './component/AddClass/AddClass';
import MyClass from './component/MyClass/MyClass';
import Instructor from './component/Instructor/Instructor';
import ClassList from './component/ClassList/ClassList';
import SelectedClass from './component/SelectedClass/SelectedClass';
import NotFoundPage from './component/NotFoundPage/NotFoundPage';
import EnrolledClasses from './component/EnrolledClasses/EnrolledClasses';
// import AddBioOfInstructor from './component/AddBioOfInstructor/AddBioOfInstructor';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <RegistrationPage></RegistrationPage>
      },
      {
        path:'/instructor',
        element:<Instructor></Instructor>
      },
      {
        path:'/class_list',
        element:<ClassList></ClassList>
      }
    ]

  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: '/dashboard/manage_classes',
        element: <ManageClasses></ManageClasses>
      },

      {
        path: '/dashboard/manage_users',
        element: <ManageUsers></ManageUsers>
      },
      {
        path:'/dashboard/addClass',
        element:<AddClass></AddClass>
      },
      {
        path:'/dashboard/myClass',
        element:<MyClass></MyClass>
      },
      {
        path:'/dashboard/selected_class',
        element:<SelectedClass></SelectedClass>
      },
      {
        path: '/dashboard/enrolledClasses',
        element:<EnrolledClasses></EnrolledClasses>
      }
    ]
  },
  {
    path:'*',
    element:<NotFoundPage></NotFoundPage>
  }

]);





ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
import { createBrowserRouter } from "react-router-dom";
import AllUsers from "../Components/AllUsers/AllUsers";
import DashBoardLayout from "../Layout/DashBoardLayout";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appointment/Appointment";
import DashBoard from "../Pages/Dashboard/DashBoard";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/Signup";
import AdminRoute from "./AdminRoute";
import PrivateRoutes from './PrivateRoutes';
import AddDoctor from './../Components/AddDoctor/AddDoctor';
import ManageDoctors from './../Components/ManageDoctors/ManageDoctors';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [

            {
                path: '/',
                element : <Home></Home>
            },
            {
                path: '/appointment',
                element :<Appointment></Appointment>
            },
            {
                path: '/login',
                element : <Login></Login>
            },
            {
                path: '/signup',
                element : <Signup></Signup>
            },
        ]
    },
    {
        path: '/dashboard',
        element:<PrivateRoutes><DashBoardLayout></DashBoardLayout></PrivateRoutes>,
        children : [
            {
                path : '/dashboard',
                element : <DashBoard></DashBoard>
            },
            {
                path : '/dashboard/allusers',
                element : <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path : '/dashboard/adddoctors',
                element : <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path : '/dashboard/manageDoctors',
                element : <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },

        ]

    }
])
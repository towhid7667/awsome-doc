import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appointment/Appointment";
import DashBoard from "../Pages/Dashboard/DashBoard";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/Signup";
import PrivateRoutes from './PrivateRoutes';

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
        element:<PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>
    }
])
import { createBrowserRouter } from "react-router-dom";
import DashbordLayout from "../Layout/DashbordLayout";
import MainLayout from "../Layout/MainLayout";
import AllUsers from "../Pages/Dashboard/AllUsers";
import AddDoctors from "../Pages/Dashboard/Doctors/AddDoctors";
import ManageDoctor from "../Pages/Dashboard/Doctors/ManageDoctor";
import Myappionment from "../Pages/Dashboard/Myappionment";
import Appionment from "../Pages/Home/Appoiment/Appionment";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Paymemt from "../Pages/Payment/Paymemt";
import Signup from "../Pages/Signup";
import PrivateRoutes from "./PrivateRoutes";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/home', element: <Home /> },
            { path: '/login', element: <Login /> },
            { path: '/Apoinment', element: <Appionment /> },
            { path: '/signup', element: <Signup /> },

        ]
    }, {
        path: '/dashboard',
        element: <PrivateRoutes><DashbordLayout /></PrivateRoutes>,
        children: [
            { path: '/dashboard', element: <Myappionment /> },
            { path: '/dashboard/allusers', element: <AllUsers /> },
            { path: '/dashboard/adddoctors', element: <AddDoctors /> },
            { path: '/dashboard/manageDoctor', element: <ManageDoctor /> },
            {
                path: '/dashboard/payment/:id',
                loader: ({ params }) => fetch(`http://localhost:2100/payment/${params.id}`)
                , element: <Paymemt />,
            },
        ]
    }
])

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Contact from "../pages/Contact";
import AddService from "../pages/AddService";
import AdminLayout from "../components/layout/AdminLayout";
import Home from "../pages/Home";



const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path : '/',
                element : <Home></Home> ,
            },
            {
                path: '/about',
                element: <About></About>,
            },

            {
                path: '/contact',
                element: <Contact></Contact>,
            },
        ],

    },
    {
        path: '/login',
        element: <Login></Login>,
    },
    {
        path: '/signUp',
        element: <SignUp></SignUp>,
    },
    {
        path: '/adminLayout',
        element:<AdminLayout></AdminLayout> ,
        children : [
            {
                path : 'addProduct',
                element : <AddService></AddService> ,
            },
        ]
    },
]);
export default router


/* 

    {
        path : '/',
        element : ,
    },
    
    */
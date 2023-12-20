
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home/Home";
import MyAssignment from "../pages/MyAssignment";
import Assignments from "../pages/Assignments";
import CreateAssignment from "../pages/CreateAssignment";
import AssignmentDetails from "../pages/AssignmentDetails";
import UpdateAssignment from "../pages/UpdateAssignment";
import PrivateRoute from "../pages/PrivateRoute";



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
                path: '/assignments',
                element: <Assignments></Assignments>,
                loader : () => fetch('https://group-study-server-five.vercel.app/assignment')
            },
            {
                path: '/assignments/:id',
                element: <PrivateRoute><AssignmentDetails></AssignmentDetails></PrivateRoute> ,
                loader : ({params}) => fetch(`https://group-study-server-five.vercel.app/assignment/${params.id}`)
            },

            {
                path: '/createAssignment',
                element: <CreateAssignment></CreateAssignment>
            },
            {
                path: '/updateAssignment/:id',
                element: <UpdateAssignment></UpdateAssignment>,
                // loader : ({params}) => fetch(`https://localhost:5000/updateAssignment/${params.id}`)

            },
            {
                path: '/myAssignment',
                element: <PrivateRoute><MyAssignment></MyAssignment></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>,
            },
        ],

    },
  
    
]);
export default router


/* 

    {
        path : '/',
        element : ,
    },
    
    */
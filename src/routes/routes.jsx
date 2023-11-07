
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home/Home";
import MyAssignment from "../pages/MyAssignment";
import Assignments from "../pages/Assignments";
import CreateAssignment from "../pages/CreateAssignment";
import AssignmentDetails from "../pages/AssignmentDetails";



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
                loader : () => fetch('http://localhost:3000/assignment')
            },
            {
                path: '/assignments/:id',
                element: <AssignmentDetails></AssignmentDetails>,
                loader : ({params}) => fetch(`http://localhost:3000/assignment/${params.id}`)
            },

            {
                path: '/createAssignment',
                element: <CreateAssignment></CreateAssignment>
            },
            {
                path: '/myAssignment',
                element: <MyAssignment></MyAssignment>
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
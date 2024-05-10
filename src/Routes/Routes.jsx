import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../pages/Home/Home";
import Contact from "../pages/contact/Contact";
import Login from "../pages/Register/Login";
import Signup from "../pages/Register/Signup";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout/>,
        children: [
            {
                path: "/",
                element: <Home/>

            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/login",
                element: <Login/>

            },

            {
                path: "/signup",
                element: <Signup/>
            }

        ]
    }
])
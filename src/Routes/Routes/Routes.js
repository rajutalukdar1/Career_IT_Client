import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Course from "../../components/Course/Course";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import Main from "../../layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [

            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/course',
                element: <Course></Course>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }

        ]
    }
])
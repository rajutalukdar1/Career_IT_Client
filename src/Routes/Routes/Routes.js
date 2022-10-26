import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import CardDetails from "../../components/CardDetails/CardDetails";
import Course from "../../components/Course/Course";
import Faq from "../../components/Faq/Faq";
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
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/course',
                element: <Course></Course>,
                loader: () => fetch('http://localhost:5000/course-categories')
            },
            {
                path: '/courseDetails/:id',
                element: <CardDetails></CardDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/courseDetails/${params.id}`)
            },
            {
                path: '/faq',
                element: <Faq></Faq>
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
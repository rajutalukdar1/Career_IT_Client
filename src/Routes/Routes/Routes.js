import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import CardDetails from "../../components/CardDetails/CardDetails";
import Course from "../../components/Course/Course";
import EnrollPage from "../../components/EnrollPage/EnrollPage";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import Faq from "../../components/Faq/Faq";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import Main from "../../layout/Main";
import PrivateRoute from "../PrivetRoute/PrivateRoute";

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
                loader: () => fetch('https://assignment-no-10-server.vercel.app/course-categories')
            },
            {
                path: '/courseDetails/:id',
                element: <CardDetails></CardDetails>,
                loader: ({ params }) => fetch(`https://assignment-no-10-server.vercel.app/courseDetails/${params.id}`)
            },
            {
                path: '/enroll',
                element: <PrivateRoute><EnrollPage></EnrollPage></PrivateRoute>
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
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])
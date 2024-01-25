import {createBrowserRouter, Navigate} from "react-router-dom";
import Login from "./views/Login.jsx";
import NotFound from "./views/NotFound.jsx";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import HomePage from "./views/HomePage.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/',
        element: <NotFound />
    }
])

export default router;
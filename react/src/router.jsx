import {createBrowserRouter, Navigate} from "react-router-dom";
import Login from "./views/Login.jsx";
import NotFound from "./views/NotFound.jsx";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import HomePage from "./views/HomePage.jsx";
import Signup from "./views/Signup.jsx";
import ProfileSelect from "./views/ProfileSelect.jsx";
import CreateRecipe from "./views/CreateRecipe.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/createrecipe',
                element: <CreateRecipe />
            },
        ]
    },
    {
        path: '/profile',
        element: <ProfileSelect />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <Signup />
    },
    {
        path: '/',
        element: <NotFound />
    }
])

export default router;
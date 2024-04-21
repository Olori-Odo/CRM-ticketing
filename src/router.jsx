import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import Signup from "./Signup/Signup";
import Login from "./LoginForm/Login";
import Forgotpass from "./Forgotpass/Forgotpass";




const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [

            {
                index: true,
                element: <Signup />
            },

            {
                path: "/Signup",
                element: <Signup />
            },

            {
                path: "/login",
                element: <Login />
            },

            {
                path: "/Forgotpass",
                element: <Forgotpass />
            }
        ]
    }
])

export default router;
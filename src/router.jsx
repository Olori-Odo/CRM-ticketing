import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./Layout/DashboardLayout";
import Login from "./LoginForm/Login";
import Officials from "./pages/officials/Officials";
import TicketPage from "./pages/ticketpage/TicketPage";
import Signup from "./Signup/Signup";
import LandingPage from "./Landing/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    children: [

      {
        index: true,
        element: <LandingPage/>
      },

      {
        path: "/signup",
        element: <Signup/>
      },

      {
        path: "/login",
        element: <Login/>
      },
      

      {
        path: "/TicketPage",
        element: <TicketPage/>
      },

      {
        path: "/Officials",
        element: <Officials/>
      },


      {
        path: "/DashboardLayout",
        element: <DashboardLayout/>
      },

      {
        path: "/ticket/:id",
        element: <TicketPage/>
      }
    ],
   },
]);

export default router;

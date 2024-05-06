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
    element: <LandingPage />,
    children: [
      
      // {
      //   index: true,
      //   element: <LandingPage />,
      // },

      {
        path: "/Dashboard",
        element: <DashboardLayout/>
      },

      {
        path: "/signup",
        element: <Signup/>
      },
      {
        path: "/ticket",
        element: <TicketPage />,
      },
      {
        path: "/ticket/:id",
        element: <TicketPage editMode={true} />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/officials",
        element: <Officials />,
      },
      {
        path: "*",
        element: "Sorry Page not found",
      },
    ],
  },
]);

export default router;

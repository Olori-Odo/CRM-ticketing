import { createBrowserRouter } from "react-router-dom";

import DashboardLayout from "./Layout/DashboardLayout";

import Login from "./LoginForm/Login";
import SignUp from "./Signup/Signup";
import Officials from "./pages/officials/Officials";

import Users from "./Users";
import TicketForm from "./pages/ticketForm/ticketForm";
import NewTicket from "./pages/newTicket/newTicket";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Users />,
      },
      {
        path: "/newticket",
        element: <NewTicket />,
      },
      {
        path: "/login",
        element: <TicketForm />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/officials",
        element: <Officials />,
      },
      {
        path: "/users",
        element: <Users />,
      },
    ],
  },
]);

export default router;

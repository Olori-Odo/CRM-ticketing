import { createBrowserRouter } from "react-router-dom";

import DashboardLayout from "./Layout/DashboardLayout";
import NewTicket from "./newTicket/NewTicket";
import Login from "./LoginForm/Login";
import SignUp from "./Signup/Signup";
import Officials from "./officials/Officials";

import Users from "./Users";
import TicketForm from "../src/ticketForm/ticketForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <SignUp />,
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

import { createBrowserRouter } from "react-router-dom";
import TicketForm from "./ticketForm/ticketForm";
import DashboardLayout from "./Layout/DashboardLayout";
import NewTicket from "./newTicket/NewTicket";
import Login from "./LoginForm/Login";
import SignUp from "./Signup/Signup";
import Officials from "./officials/Officials";

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
    ],
  },
]);

export default router;

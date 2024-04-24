import { createBrowserRouter } from "react-router-dom";
import TicketForm from "./ticketForm/ticketForm";
import DashboardLayout from "./Layout/DashboardLayout";
import NewTicket from "./newTicket/newTicket";
import Login from "./LoginForm/Login";
import SignUp from "./Signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <TicketForm />,
      },
      {
        path: "/newTicket",
        element: <NewTicket />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;

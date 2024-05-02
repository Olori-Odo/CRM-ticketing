import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./Layout/DashboardLayout";
import Login from "./LoginForm/Login";
import Officials from "./pages/officials/Officials";
import Users from "./Users";
import TicketPage from "./pages/ticketpage/TicketPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,

    children: [
      {
        path: "/ticket",
        element: <TicketPage />,
      },
      {
        path: "/ticket/:id",
        element: <TicketPage editMode={true} />,
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
      {
        path: "*",
        element: "Sorry Page not found",
      },
    ],
  },
]);

export default router;

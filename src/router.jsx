

import {createBrowserRouter, } from "react-router-dom"
import TicketForm from "./components/ticketForm"


const router = createBrowserRouter([
    {
        path: "/ticketForm",
        element: <TicketForm/>,
        child: [
            {
                path: "/newTicket",
                element: <NewTicket/>
            },

        ]
    }
])

export default router

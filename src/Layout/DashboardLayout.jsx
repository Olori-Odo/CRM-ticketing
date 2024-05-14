import { Outlet } from "react-router-dom";
import TopBar from "../components/Topbar/Topbar";
import Sidebar from "../components/sidebar/Sidebar";
import "./Dashboardlayout.css";
import Tickets from "../components/Tickets";
import AvatarDisplay from "../components/Topbar/AvatarDisplay";
import Hafsah from "../assets/images/Hafsah.jpeg";
import Rahmat from "../assets/images/Rahmat.jpeg";
import AFO from "../assets/images/AFO.png";

const Dashboard = () => {
  const ticketInfo = [
    {
      email: "Akinyemifatai@yahoo.com",
      color: "red",
      title: "Unable to load",
      owner: "Fatai Akiyemi",
      avatar: AFO,
      status: "stuck",
      priority: "New Ticket",
      progress: 40,
      description: "trying to locate where error is coming from in my code",
      timestamp: "2024-05-01T-12:33:12+0000",
    },
    {
      email: "HafsahFash@yahoo.com",
      color: "Green",
      title: "Unable to call",
      owner: "Fashola Hafsat",
      avatar: Hafsah,
      status: "done",
      priority: "Ongoing Ticket",
      progress: 80,
      description: "Searching to repair faults",
      timestamp: "2024-05-01T-04-33-12+0000",
    },
    {
      email: " Q2 2022",
      color: "blue",
      title: "Unable to browse",
      owner: "Rahmat T.",
      avatar: Rahmat,
      status: "working on it",
      priority: "Resolved Ticket",
      progress: 50,
      description: "Creating a video for public use",
      timestamp: "2024-04-01T:07:33-12+0000",
    },
  ];

  const colors = [
    "rgb(211,200,235)",
    "rgb(201,190,200)",
    "rgb(111,200,250)",
    "rgb(186,178,195)",
    "rgb(67,90,55)",
  ];

  const uniqueCategories = [...new Set(ticketInfo?.map(({ email }) => email))];

  return (
    <div id="Dashboardwrap">
      <Sidebar />

      <div className="dashboard-container">
        {/* <TopBar /> */}

        <h1>My Tickets..</h1>

        <div className="DashB-ticket-container">
          <div>
            {ticketInfo &&
              uniqueCategories?.map((uniqueCategory, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3> {uniqueCategory} </h3>

                  {ticketInfo
                    .filter((ticket) => ticket.email === uniqueCategory)
                    .map((filteredTicket, _index) => (
                      <div>
                        <TopBar
                          key={_index}
                          ticket={filteredTicket}
                          avatar={filteredTicket.avatar}
                        />
                      </div>
                    ))}

                  {ticketInfo
                    .filter((ticket) => ticket.email === uniqueCategory)
                    .map((filteredTicket, _index) => (
                      <div>
                        <Tickets
                          key={_index}
                          color={colors[categoryIndex] || colors[0]}
                          ticket={filteredTicket}
                        />
                      </div>
                    ))}
                </div>
              ))}
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

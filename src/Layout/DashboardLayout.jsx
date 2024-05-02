import { Outlet } from "react-router-dom";
import TopBar from "../components/Topbar/Topbar";
import Sidebar from "../components/sidebar/Sidebar";
import "./Dashboardlayout.css";
import Tickets from "../components/Tickets";
import AvatarDisplay from "../components/Topbar/AvatarDisplay";

const Dashboard = () => {
  const ticketInfo = [
    {
      category: "Q1 2022",
      color: "red",
      title: "Debugging",
      owner: "Rahmat",
      avatar: "",
      status: "stuck",
      priority: 5,
      progress: 40,
      description: "trying to locate where error is coming from in my code",
      timestamp: "2024-05-01T-12:33:12+0000",
    },
    {
      category: "Q1 2022",
      color: "Green",
      title: "Troubleshooting",
      owner: "Akinyemi",
      avatar: "",
      status: "done",
      priority: 4,
      progress: 80,
      description: "Searching to repair faults",
      timestamp: "2024-05-01T-04-33-12+0000",
    },
    {
      category: " Q2 2022",
      color: "blue",
      title: "Making a Fitness video",
      owner: "Raphael",
      avatar: "",
      status: "working on it",
      priority: 3,
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

  const uniqueCategories = [
    ...new Set(ticketInfo?.map(({ category }) => category)),
  ];

  return (
    <div id="Dashboardwrap">
      <Sidebar />

      <div className="dashboard-container">
        <TopBar />

        <h1>My Tickets..</h1>

        <div className="DashB-ticket-container">
          <div>
            {ticketInfo &&
              uniqueCategories?.map((uniqueCategory, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3> {uniqueCategory} </h3>

                  {ticketInfo
                    .filter((ticket) => ticket.category === uniqueCategory)
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

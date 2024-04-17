import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./Layout/DashboardLayout";

const Router = () => {
  return (
    <BrowserRouter>
      <Dashboard/>
      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

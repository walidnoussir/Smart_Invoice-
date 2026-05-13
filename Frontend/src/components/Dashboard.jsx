import { Outlet } from "react-router-dom";
import Logo from "./Logo";
import SideBar from "./SideBar";

function Dashboard() {
  return (
    <div className="bg-indigo-950 min-h-screen w-[40%] lg:w-[15%]">
      <Logo />
      <SideBar />
    </div>
  );
}

export default Dashboard;

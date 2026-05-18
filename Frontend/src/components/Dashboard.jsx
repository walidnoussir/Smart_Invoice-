import Logo from "./Logo";
import SideBar from "./SideBar";

function Dashboard() {
  return (
    <div className="bg-indigo-950 h-full w-[40%] lg:w-[15%]">
      <Logo />
      <SideBar />
    </div>
  );
}

export default Dashboard;

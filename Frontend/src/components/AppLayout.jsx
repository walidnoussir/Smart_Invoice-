import { Outlet } from "react-router-dom";

import Dashboard from "./Dashboard";
import NavBar from "./NavBar";

function AppLayout() {
  return (
    <div>
      <NavBar />
      <Dashboard />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;

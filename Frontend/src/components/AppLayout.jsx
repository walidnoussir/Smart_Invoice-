import { Outlet } from "react-router-dom";

import Dashboard from "./Dashboard";

function AppLayout() {
  return (
    <div className="flex gap-2.5 ">
      {/* <NavBar /> */}
      <Dashboard />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;

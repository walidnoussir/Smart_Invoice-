import { Outlet } from "react-router-dom";

import Dashboard from "./Dashboard";

function AppLayout() {
  return (
    <div className="flex gap-2.5 h-screen">
      {/* <NavBar /> */}
      <Dashboard />
      <main className="w-full overflow-scroll">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;

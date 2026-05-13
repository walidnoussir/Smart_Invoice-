import { Outlet } from "react-router-dom";

import Dashboard from "./Dashboard";

function AppLayout() {
  return (
    <div>
      <Dashboard />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;

import { Outlet, useNavigate } from "react-router-dom";

import Dashboard from "./Dashboard";

function AppLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <div className="flex gap-2.5 h-screen">

    {/* <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-4 py-2 rounded-lg"
    >
      Logout
    </button> */}

      {/* <NavBar /> */}
      <Dashboard  />
      <main className="w-full overflow-scroll">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;

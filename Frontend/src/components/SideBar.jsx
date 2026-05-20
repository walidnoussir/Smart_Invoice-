import { CreditCard, House, LogOut, Users } from "lucide-react";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function SideBar() {
  const { logout } = useAuth();
  return (
    <div className="flex flex-col justify-between h-[95%] fixed py-4 px-2">
      <ul className="flex gap-5 flex-col text-white">
        <li>
          <NavLink to="/home">
            <House />
            <span>Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="suppliers" className="li">
            <Users />
            <span>Suppliers</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="invoices" className="li">
            <CreditCard />
            <span>Invoices</span>
          </NavLink>
        </li>
      </ul>

      <button className="text-white px-2" onClick={logout}>
        <LogOut />
        <span>Logout</span>
      </button>
    </div>
  );
}

export default SideBar;

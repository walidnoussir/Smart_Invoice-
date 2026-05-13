import { CreditCard, House, LogOut, Users } from "lucide-react";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className="flex flex-col justify-between h-[95%]  py-4 px-2">
      <ul className="flex gap-5 flex-col text-white">
        <div>
          <li>
            <NavLink to="/" className="li">
              <House />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/suppliers" className="li">
              <Users />
              <span>Suppliers</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/invoices" className="li">
              <CreditCard />
              <span>Invoices</span>
            </NavLink>
          </li>
        </div>
      </ul>

      <button className="li text-white px-2">
        <LogOut />
        <span>Logout</span>
      </button>
    </div>
  );
}

export default SideBar;

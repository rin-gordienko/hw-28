import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul className="menu-list">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="users"
          >
            Users
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="hotels"
          >
            Hotels
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="sign-up"
          >
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

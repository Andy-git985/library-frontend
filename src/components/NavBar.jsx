import { Link, NavLink } from "react-router-dom";

const activeStyle = {
  color: "blue",
};

const NavBar = () => (
  <div>
    <NavLink
      to="/authors"
      style={({ isActive }) => (isActive ? activeStyle : null)}
    >
      <button>authors</button>
    </NavLink>
    <NavLink
      to="/books"
      style={({ isActive }) => (isActive ? activeStyle : null)}
    >
      <button>books</button>
    </NavLink>
    <NavLink
      to="/add"
      style={({ isActive }) => (isActive ? activeStyle : null)}
    >
      <button>add book</button>
    </NavLink>
  </div>
);

export default NavBar;

import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./style.css";
const Nav = () => {
  return (
    <div>
      <nav>
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
        </ol>
      </nav>
      <Outlet />
    </div>
  );
};
export default Nav;

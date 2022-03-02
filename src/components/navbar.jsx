import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = props => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
            Divly Movies
            <span className="badge m-2 text-light bg-dark">{ props.totalCounters.length }</span>
        </span>

            <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink 
          className="nav-link" 
          to="/movies"
          style={({ isActive }) => { return {
            display: "block",
            fontWeight: "bold",
            color: isActive ? "#0d6efd" : ""
          } }}
          > Movies</NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
          className="nav-link" 
          to="/customers"
          style={({ isActive }) => { return {
            display: "block",
            fontWeight: "bold",
            color: isActive ? "#0d6efd" : ""
          } }}
          >Customers</NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
          className="nav-link" 
          to="/rentals"
          style={({ isActive }) => { return {
            display: "block",
            fontWeight: "bold",
            color: isActive ? "#0d6efd" : ""
          } }}
          >Rentals</NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
          className="nav-link" 
          to="/login"
          style={({ isActive }) => { return {
            display: "block",
            fontWeight: "bold",
            color: isActive ? "#0d6efd" : ""
          } }}
          >Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
          className="nav-link" 
          to="/signup"
          style={({ isActive }) => { return {
            display: "block",
            fontWeight: "bold",
            color: isActive ? "#0d6efd" : ""
          } }}
          >Register</NavLink>
        </li>
      </ul>
    </div>
      </div>
    </nav>
    )
}
 
export default NavBar;

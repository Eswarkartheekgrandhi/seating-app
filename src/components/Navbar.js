import React, { useState } from "react";
import { FaUser, FaHome, FaBook, FaClipboard, FaTasks } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [userName] = useState("admin");

  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/" className="nav-item">
          <FaHome /> Home
        </Link>
        <Link to="/classrooms" className="nav-item">
          <FaBook /> Classrooms
        </Link>
        <Link to="/exams" className="nav-item">
          <FaClipboard /> Exams
        </Link>
        <Link to="/allocation" className="nav-item">
          <FaTasks /> Allocation
        </Link>
      </div>
      <div className="navbar-right">
        <div className="profile">
          <FaUser /> {userName}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

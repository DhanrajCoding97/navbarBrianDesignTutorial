// import React, { useState } from "react";
// import { Button } from "./Button";
import "./Navbar.css";
// import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navabar-logo">
          Star Instruments & Control
        </Link>
      </nav>
    </>
  );
}

export default Navbar;

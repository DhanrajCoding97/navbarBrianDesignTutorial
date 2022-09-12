import React, { useStat } from "react";
import { Button } from "./Button";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <link to="/" className="navabar-logo">
          Star Instruments
        </link>
      </nav>
    </>
  );
}

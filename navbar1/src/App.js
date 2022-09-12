import React, { useState } from "react";
import { Button } from "./components/Button";
import { Link } from "react-router-dom";
import './Navbar.css'
import Dropdown from "./components/Dropdown";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          Star Instruments & Control
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas-fa-bars"} />
        </div>
      </nav>
    </>
  );
}

export default App;

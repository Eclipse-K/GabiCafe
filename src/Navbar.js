import { Link } from "react-router-dom";
import Logo from "./Images/Logo.png";
import { FiAlignJustify, FiX } from "react-icons/fi";
import "./Navbar.css";
import { useState } from "react";
import OffcanvasMenu from "./OffcanvasMenu";

function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed((prevCollapsed) => !prevCollapsed);
  };

  const closeOffcanvas = () => {
    setIsCollapsed(false);
  };

  return (
    <nav className="navbar-offcanvas-container">
      <Link className="navbar-logo" to="/">
        <img src={Logo} alt={Logo} />
      </Link>
      <div className={`navbar-offcanvas ${isCollapsed ? "open" : ""}`}>
        {isCollapsed ? (
          <button className="offcanvas-button rotated" onClick={closeOffcanvas}>
            <FiX />
          </button>
        ) : (
          <button className="offcanvas-button" onClick={toggleCollapse}>
            <FiAlignJustify />
          </button>
        )}
      </div>
      {isCollapsed && <OffcanvasMenu closeOffcanvas={closeOffcanvas} />}
    </nav>
  );
}

export default Navbar;

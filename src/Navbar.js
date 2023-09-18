import { Link } from "react-router-dom";
import Logo from "./Components/Images/Logo.png";
import { FiX } from "react-icons/fi";
import "./Navbar.css";
import { useState } from "react";
import OffcanvasMenu from "./OffcanvasMenu";
import NavContainer from "./Components/NavbarElement/NavContainer";
import useSystemTheme from "./Components/useSystemTheme";
import { ThemeProvider } from "styled-components";

const LightMode = {
  backgroundColor: "white",
  textColor: "black",
};

const DarkMode = {
  backgroundColor: "black",
  textColor: "white",
};

function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed((prevCollapsed) => !prevCollapsed);
  };

  const closeOffcanvas = () => {
    setIsCollapsed(false);
  };

  //테마로 색상 변경
  const systemTheme = useSystemTheme();
  console.log(systemTheme);

  return (
    <ThemeProvider theme={systemTheme === "dark" ? DarkMode : LightMode}>
      <NavContainer>
        <Link className="navbar-logo" to="/">
          <img src={Logo} alt={Logo} />
        </Link>
        <div className={`navbar-offcanvas ${isCollapsed ? "open" : ""}`}>
          {isCollapsed ? (
            <button
              className="offcanvas-button rotated"
              onClick={closeOffcanvas}
            >
              <FiX />
            </button>
          ) : (
            <button
              className={`offcanvas-button ${isHovered ? "hovered" : ""}`}
              onClick={toggleCollapse}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className={`line ${isHovered ? "hovered" : ""}`}></span>
              <span className={`line ${isHovered ? "hovered" : ""}`}></span>
              <span className={`line ${isHovered ? "hovered" : ""}`}></span>
            </button>
          )}
        </div>
        {isCollapsed && <OffcanvasMenu closeOffcanvas={closeOffcanvas} />}
      </NavContainer>
    </ThemeProvider>
  );
}

export default Navbar;

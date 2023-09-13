import { Link } from "react-router-dom";
import Logo from "./Images/Logo.png";
import { FiAlignJustify, FiX } from "react-icons/fi";
import "./Navbar.css";
import { useState } from "react";
import OffcanvasMenu from "./OffcanvasMenu";
import NavContainer from "./NavbarElement/NavContainer";
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

  const toggleCollapse = () => {
    setIsCollapsed((prevCollapsed) => !prevCollapsed);
  };

  const closeOffcanvas = () => {
    setIsCollapsed(false);
  };

  //테마로 색상 변경
  const systemTheme = useSystemTheme();

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
            <button className="offcanvas-button" onClick={toggleCollapse}>
              <FiAlignJustify />
            </button>
          )}
        </div>
        {isCollapsed && <OffcanvasMenu closeOffcanvas={closeOffcanvas} />}
      </NavContainer>
    </ThemeProvider>
  );
}

export default Navbar;

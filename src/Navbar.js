import { Link } from "react-router-dom";
import Logo from "./Components/Images/LogoGabi.png";
import { FiX } from "react-icons/fi";
import "./Navbar.css";
import { useEffect, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleCollapse = () => {
    setIsCollapsed((prevCollapsed) => !prevCollapsed);
  };

  const closeOffcanvas = () => {
    setIsCollapsed(false);
  };

  //테마로 색상 변경
  const systemTheme = useSystemTheme();
  console.log(systemTheme);

  //이벤트 리스너를 통해 화면 크기 변경을 감지
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768); //아이패드 미니 크기
    }

    window.addEventListener("resize", handleResize);

    if (isMobile) {
      setIsCollapsed(false);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <ThemeProvider theme={systemTheme === "dark" ? DarkMode : LightMode}>
      <NavContainer>
        <Link className="navbar-logo" to="/">
          <img src={Logo} alt={Logo} />
        </Link>
        <div>
          {isMobile ? (
            //화면이 작을 때, 아이콘이 나타남
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
          ) : (
            //화면이 큰 경우, 모든 탭 표시
            <div className="Navbar-tab">
              <Link to="/Information">Information</Link>
              <Link to="/Menu">Menu</Link>
              <Link to="/Products">Products</Link>
              <Link to="/Login">Login</Link>
            </div>
          )}
        </div>

        {isCollapsed && <OffcanvasMenu closeOffcanvas={closeOffcanvas} />}
      </NavContainer>
    </ThemeProvider>
  );
}

export default Navbar;

import { Link } from "react-router-dom";
import Logo from "./Images/Logo.png";

function Navbar() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary fixed-top" data-bs-theme="dark">
        <div className="container-fluid">
          <Link to="/">
            <img
              className="navbar-brand"
              src={Logo}
              alt="Logo"
              width="100px"
              height="80px"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Gabi
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link to="/Menu" className="nav-link" aria-current="page">
                    Information
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Menu" className="nav-link">
                    Menu
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Products" className="nav-link">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Login" className="nav-link">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

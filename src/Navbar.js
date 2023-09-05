import { Link } from "react-router-dom";
import Logo from "./Images/Logo.png";

function Navbar() {
  return (
    <nav class="navbar bg-body-tertiary fixed-top" data-bs-theme="dark">
      <div class="container-fluid">
        <Link to="/">
          <img
            class="navbar-brand"
            src={Logo}
            alt="Logo"
            width="100px"
            height="80px"
          />
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              Gabi
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <Link to="/Menu" class="nav-link" aria-current="page">
                  Information
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/Menu" class="nav-link">
                  Menu
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/Products" class="nav-link">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/Login" class="nav-link">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

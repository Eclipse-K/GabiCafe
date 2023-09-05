import { Link } from "react-router-dom";
import EspressoMenu from "../Images/Espresso_Menu.png";
import LatteMenu from "../Images/Latte_menu.png";
import BeverageMenu from "../Images/Beverage.png";
import BlendedMenu from "../Images/Blended.png";
import TeaMenu from "../Images/Tea.png";
import SmoothieMenu from "../Images/Smoothie.png";
import "./Menu.css";

function Menu() {
  return (
    <div>
      <div className="grid-box">
        <Link className="grid-info" to="/EspressoMenu">
          <img src={EspressoMenu} alt="EspressoMenu" />
          <div className="menu-title">- Espresso Menu -</div>
        </Link>

        <Link className="grid-info" to="/Latte">
          <img src={LatteMenu} alt="LatteMenu" />
          <div className="menu-title">- Latte -</div>
        </Link>

        <Link className="grid-info" to="/beverage">
          <img src={BeverageMenu} alt="BeverageMenu" />
          <div className="menu-title">- Beverage -</div>
        </Link>

        <Link className="grid-info" to="/blended">
          <img src={BlendedMenu} alt="BlendedMenu" />
          <div className="menu-title">- Blended -</div>
        </Link>

        <Link className="grid-info" to="/Tea">
          <img src={TeaMenu} alt="TeaMenu" />
          <div className="menu-title">- Tea -</div>
        </Link>

        <Link className="grid-info" to="/Smoothie">
          <img src={SmoothieMenu} alt="SmoothieMenu" />
          <div className="menu-title">- Smoothie -</div>
        </Link>
      </div>
    </div>
  );
}

export default Menu;

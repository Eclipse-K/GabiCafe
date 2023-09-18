import Espresso from "../Images/Espresso.png";
import Americano from "../Images/Americano.png";
import Handdrip from "../Images/Handdrip.png";
import Latte from "../Images/Latte.png";
import Cappuccino from "../Images/Cappuccino.png";
import Cafe_vienna from "../Images/Cafe_vienna.png";
import Cafe_Con_Panna from "../Images/Cafe_Con_Panna.png";
import Caramel_Macchiato from "../Images/Caramel_Macchiato.png";
import Affogato from "../Images/Affogato.png";
import Cafe_Mocha from "../Images/Cafe_Mocha.png";
import EspMenuContainer from "./E-Menu-Element/EspMenuContainer";

function EspressoMenu() {
  return (
    <EspMenuContainer>
      <div class="E-Menu-List">
        <h3>
          <b>- Espresso Menu -</b>
        </h3>
        <ul>
          <li class="E-Menu">
            <img src={Espresso} alt="Espresso" />
            <div class="E-Menu-Name">Espresso</div>
          </li>

          <li class="E-Menu">
            <img src={Americano} alt="Americano" />
            <div class="E-Menu-Name">Americano</div>
          </li>

          <li class="E-Menu">
            <img src={Handdrip} alt="Handdrip" />
            <div class="E-Menu-Name">Handdrip</div>
          </li>

          <li class="E-Menu">
            <img src={Latte} alt="Latte" />
            <div class="E-Menu-Name">Latte</div>
          </li>

          <li class="E-Menu">
            <img src={Cappuccino} alt="Cappuccino" />
            <div class="E-Menu-Name">Cappuccino</div>
          </li>

          <li class="E-Menu">
            <img src={Cafe_vienna} alt="Cafe_vienna" />
            <div class="E-Menu-Name">Cafe Vienna</div>
          </li>

          <li class="E-Menu">
            <img src={Cafe_Con_Panna} alt="Cafe_Con_Panna" />
            <div class="E-Menu-Name">Cafe Con Panna</div>
          </li>

          <li class="E-Menu">
            <img src={Caramel_Macchiato} alt="Carmel_Macchiato" />
            <div class="E-Menu-Name">Caramel Macchiato</div>
          </li>

          <li class="E-Menu">
            <img src={Affogato} alt="Affogato" />
            <div class="E-Menu-Name">Affogato</div>
          </li>

          <li class="E-Menu">
            <img src={Cafe_Mocha} alt="Cafe_Mocha" />
            <div class="E-Menu-Name">Cafe Mocha</div>
          </li>
        </ul>
      </div>
    </EspMenuContainer>
  );
}

export default EspressoMenu;

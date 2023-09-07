import Dripper from "../Images/Dripper.png";
import CoffeeServer from "../Images/Coffee_Server.png";
import EspressoMachine from "../Images/Espresso_Machine.png";
import EspressoMaker from "../Images/Espresso_Maker.png";
import FrenchPress from "../Images/French_Press.png";
import MocaPot from "../Images/Moca_pot.png";
import DutchMaker from "../Images/Dutch_Maker.png";
import CoffeeGrinder from "../Images/Coffee_Grinder.png";
import Siphon from "../Images/Siphon.png";
import CoffeeCapsuleMachine from "../Images/Coffee_Capsule_Machine.png";
import MilkFrother from "../Images/Milk_Frother.png";
import SteamingPitcher from "../Images/Steaming_Pitcher.png";
import BellCreamer from "../Images/Bell_Creamer.png";
import DripPot from "../Images/Drip_Pot.png";
import PaperCoffeeFilter from "../Images/Paper_Coffee_Filter.png";
import CoffeeTamper from "../Images/Coffee_Tamper.png";
import CoffeeDistributor from "../Images/Coffee_Distributor.png";
import VietnamesePhinDripper from "../Images/Vietnamese_Phin_Dripper.png";
import CoffeeCaddies from "../Images/Coffee_Caddies.png";
import Navbar from "../Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Products.css";

function Products() {
  AOS.init();
  return (
    <div>
      <Navbar />
      <div className="menus">
        <h3>- Products -</h3>

        <div className="product_list">
          <div
            className="Products-box"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="1400"
          >
            <img className="Products-img" src={Dripper} alt="드리퍼" />
          </div>

          <div
            className="Products-box"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img className="Products-img" src={CoffeeServer} alt="커피서버" />
          </div>

          <div
            className="Products-box"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img
              className="Products-img"
              src={EspressoMachine}
              alt="반자동에스프레소머신"
            />
          </div>

          <div
            className="Products-box"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img
              className="Products-img"
              src={EspressoMaker}
              alt="수동에스프레소머신"
            />
          </div>

          <li
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="img">
              <img
                src={FrenchPress}
                alt="프렌치프레스"
                width="400px"
                height="400px"
              />
            </div>
          </li>

          <li
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="img">
              <img src={MocaPot} alt="모카포트" width="300px" height="400px" />
            </div>
          </li>

          <li
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="img">
              <img
                src={DutchMaker}
                alt="더치메이커"
                width="300px"
                height="400px"
              />
            </div>
          </li>

          <li
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="img">
              <img
                src={CoffeeGrinder}
                alt="커피그라인더"
                width="350px"
                height="400px"
              />
            </div>
          </li>

          <li
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="img">
              <img src={Siphon} alt="사이폰" width="300px" height="400px" />
            </div>
          </li>

          <li
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="img">
              <img
                src={CoffeeCapsuleMachine}
                alt="캡슐머신"
                width="350px"
                height="195px"
              />
            </div>
          </li>

          <li
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="img">
              <img
                src={MilkFrother}
                alt="우유거품기"
                width="350px"
                height="200px"
              />
            </div>
          </li>

          <li
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="img">
              <img
                src={SteamingPitcher}
                alt="스팀피처"
                width="350px"
                height="300px"
              />
            </div>
          </li>

          <li
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="img">
              <img
                src={BellCreamer}
                alt="벨크리머"
                width="300px"
                height="300px"
              />
            </div>
          </li>

          <li
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="img">
              <img src={DripPot} alt="드립포트" width="300px" height="300px" />
            </div>
          </li>

          <li
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="img">
              <img
                src={PaperCoffeeFilter}
                alt="종이커피필터"
                width="350px"
                height="300px"
              />
            </div>
          </li>

          <li
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="img">
              <img src={CoffeeTamper} alt="탬퍼" width="300px" height="250px" />
            </div>
          </li>

          <li
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="img">
              <img
                src={CoffeeDistributor}
                alt="디스트리뷰터"
                width="300px"
                height="250px"
              />
            </div>
          </li>

          <li
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="img">
              <img
                src={VietnamesePhinDripper}
                alt="베트남식 드리퍼"
                width="300px"
                height="250px"
              />
            </div>
          </li>

          <li
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="img">
              <img
                src={CoffeeCaddies}
                alt="커피통"
                width="300px"
                height="250px"
              />
            </div>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Products;

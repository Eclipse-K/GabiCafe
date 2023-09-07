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

        <div className="Products-list">
          <div
            className="Products-box"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="1400"
          >
            <img className="Products-img" src={Dripper} alt="드리퍼" />
            <p className="Products-content">드리퍼</p>
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

          <div
            className="Products-box"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img
              className="Products-img"
              src={FrenchPress}
              alt="프렌치프레스"
            />
          </div>

          <div
            className="Products-box"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img className="Products-img" src={MocaPot} alt="모카포트" />
          </div>

          <div
            className="Products-box"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img className="Products-img" src={DutchMaker} alt="더치메이커" />
          </div>

          <div
            className="Products-box"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img
              className="Products-img"
              src={CoffeeGrinder}
              alt="커피그라인더"
            />
          </div>

          <div
            className="Products-box"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img className="Products-img" src={Siphon} alt="사이폰" />
          </div>

          <div
            className="Products-box"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img
              className="Products-img"
              src={CoffeeCapsuleMachine}
              alt="캡슐머신"
            />
          </div>

          <div
            className="Products-box"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img className="Products-img" src={MilkFrother} alt="우유거품기" />
          </div>

          <div
            className="Products-box"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img
              className="Products-img"
              src={SteamingPitcher}
              alt="스팀피처"
            />
          </div>

          <div
            className="Products-box"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img className="Products-img" src={BellCreamer} alt="벨크리머" />
          </div>

          <div
            className="Products-box"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img className="Products-img" src={DripPot} alt="드립포트" />
          </div>

          <div
            className="Products-box"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img
              className="Products-img"
              src={PaperCoffeeFilter}
              alt="종이커피필터"
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
              src={CoffeeTamper}
              alt="탬퍼"
              width="300px"
              height="250px"
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
              src={CoffeeDistributor}
              alt="디스트리뷰터"
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
              src={VietnamesePhinDripper}
              alt="베트남식 드리퍼"
            />
          </div>

          <div
            className="Products-box"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img className="Products-img" src={CoffeeCaddies} alt="커피통" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;

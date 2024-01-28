import { useState } from "react";
import Navbar from "../../Navbar";
import LatteJson from "./CafeMenu.json";
import CafeMenuContainer from "./C-Menu-Element/CafeMenuContainer";
import CafeMenuImgItem from "./C-Menu-Element/CafeMenuImgItem";
import ReverseButton from "./C-Menu-Element/ReverseButton";
import CafeMenuH1 from "./C-Menu-Element/CafeMenuH1";
import { CiUndo } from "react-icons/ci";
import { Link } from "react-router-dom";
import CafeLink from "./C-Menu-Element/CafeLink";

function LatteMenu() {
  // eslint-disable-next-line
  const [latImages, setLatImages] = useState(LatteJson.latimages);

  return (
    <div>
      <Navbar />
      <CafeMenuH1>
        <CafeLink to="/Menu">Latte Menu</CafeLink>
      </CafeMenuH1>

      <CafeMenuContainer>
        {latImages.map((lat, index) => (
          <CafeMenuImgItem key={index}>
            <img
              src={process.env.PUBLIC_URL + `/images/${lat.latUrl}`}
              alt={lat.lat_name}
            />
            <p>{lat.lat_name}</p>
          </CafeMenuImgItem>
        ))}
      </CafeMenuContainer>
      <ReverseButton>
        <Link className="Reverse-link" to="/Menu">
          <CiUndo className="Reverse-icon" />
        </Link>
      </ReverseButton>
    </div>
  );
}

export default LatteMenu;

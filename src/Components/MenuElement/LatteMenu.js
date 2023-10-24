import { useState } from "react";
import Navbar from "../../Navbar";
import LatteJson from "./CafeMenu.json";
import CafeMenuContainer from "./C-Menu-Element/CafeMenuContainer";
import CafeMenuImgItem from "./C-Menu-Element/CafeMenuImgItem";
import ReverseButton from "./C-Menu-Element/ReverseButton";
import { CiUndo } from "react-icons/ci";
import { Link } from "react-router-dom";

function LatteMenu() {
  // eslint-disable-next-line
  const [latImages, setLatImages] = useState(LatteJson.latimages);

  return (
    <div>
      <Navbar />
      <CafeMenuContainer>
        <h1>Latte Menu</h1>

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

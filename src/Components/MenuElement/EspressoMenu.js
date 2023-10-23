import { useState } from "react";
import Navbar from "../../Navbar";
import EspJson from "./CafeMenu.json";
import CafeMenuContainer from "./C-Menu-Element/CafeMenuContainer";
import CafeMenuImgItem from "./C-Menu-Element/CafeMenuImgItem";
import { Link } from "react-router-dom";
import { CiUndo } from "react-icons/ci";
import ReverseButton from "./C-Menu-Element/ReverseButton";

function EspressoMenu() {
  // eslint-disable-next-line
  const [espImages, setEspImages] = useState(EspJson.espimages);

  return (
    <div>
      <Navbar />
      <CafeMenuContainer>
        <h1>Espresso Menu</h1>

        {espImages.map((esp, index) => (
          <CafeMenuImgItem key={index}>
            <img
              src={process.env.PUBLIC_URL + `/images/${esp.espUrl}`}
              alt={esp.esp_name}
            />
            <p>{esp.esp_name}</p>
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

export default EspressoMenu;

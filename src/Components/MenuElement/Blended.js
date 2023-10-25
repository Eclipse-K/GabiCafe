import { useState } from "react";
import Navbar from "../../Navbar";
import BlendJson from "./CafeMenu.json";
import CafeMenuContainer from "./C-Menu-Element/CafeMenuContainer";
import CafeMenuImgItem from "./C-Menu-Element/CafeMenuImgItem";
import ReverseButton from "./C-Menu-Element/ReverseButton";
import { Link } from "react-router-dom";
import { CiUndo } from "react-icons/ci";

function Blended() {
  // eslint-disable-next-line
  const [bleImages, setBleImages] = useState(BlendJson.bleimages);

  return (
    <div>
      <Navbar />
      <CafeMenuContainer>
        <h1>Blended</h1>

        {bleImages.map((blend, index) => (
          <CafeMenuImgItem key={index}>
            <img
              src={process.env.PUBLIC_URL + `/images/${blend.bleUrl}`}
              alt={blend.ble_name}
            />
            <p>{blend.ble_name}</p>
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

export default Blended;

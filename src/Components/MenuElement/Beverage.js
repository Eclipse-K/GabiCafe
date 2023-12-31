import { useState } from "react";
import Navbar from "../../Navbar";
import BeverJson from "./CafeMenu.json";
import CafeMenuContainer from "./C-Menu-Element/CafeMenuContainer";
import CafeMenuImgItem from "./C-Menu-Element/CafeMenuImgItem";
import ReverseButton from "./C-Menu-Element/ReverseButton";
import { Link } from "react-router-dom";
import { CiUndo } from "react-icons/ci";
import CafeMenuH1 from "./C-Menu-Element/CafeMenuH1";

function Beverage() {
  // eslint-disable-next-line
  const [beverImages, setBeverImages] = useState(BeverJson.beverimages);

  return (
    <div>
      <Navbar />
      <CafeMenuH1>Beverage</CafeMenuH1>
      <CafeMenuContainer>
        {beverImages.map((bever, index) => (
          <CafeMenuImgItem key={index}>
            <img
              src={process.env.PUBLIC_URL + `/images/${bever.beverUrl}`}
              alt={bever.bever_name}
            />
            <p>{bever.bever_name}</p>
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

export default Beverage;

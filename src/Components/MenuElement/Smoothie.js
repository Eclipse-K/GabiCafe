import { useState } from "react";
import Navbar from "../../Navbar";
import SmooJson from "./CafeMenu.json";
import CafeMenuContainer from "./C-Menu-Element/CafeMenuContainer";
import CafeMenuImgItem from "./C-Menu-Element/CafeMenuImgItem";

function Smoothie() {
  // eslint-disable-next-line
  const [smooImages, setSmooImages] = useState(SmooJson.smooimages);

  return (
    <div>
      <Navbar />
      <CafeMenuContainer>
        <h1>Smoothie</h1>

        {smooImages.map((smoo, index) => (
          <CafeMenuImgItem key={index}>
            <img
              src={process.env.PUBLIC_URL + `/images/${smoo.smooUrl}`}
              alt={smoo.smoo_name}
            />
            <p>{smoo.smoo_name}</p>
          </CafeMenuImgItem>
        ))}
      </CafeMenuContainer>
    </div>
  );
}

export default Smoothie;

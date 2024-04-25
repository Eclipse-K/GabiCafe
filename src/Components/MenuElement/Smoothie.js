import { useState } from "react";
import SmooJson from "./CafeMenu.json";
import CafeMenuContainer from "./C-Menu-Element/CafeMenuContainer";
import CafeMenuImgItem from "./C-Menu-Element/CafeMenuImgItem";
import CafeMenuH1 from "./C-Menu-Element/CafeMenuH1";
import CafeLink from "./C-Menu-Element/CafeLink.js";

function Smoothie() {
  // eslint-disable-next-line
  const [smooImages, setSmooImages] = useState(SmooJson.smooimages);

  return (
    <div>
      <CafeMenuH1>
        <CafeLink to="/Menu">Smoothie</CafeLink>
      </CafeMenuH1>

      <CafeMenuContainer>
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

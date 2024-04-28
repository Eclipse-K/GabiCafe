import { useState } from "react";
import EspJson from "./CafeMenu.json";
import CafeMenuContainer from "./C-Menu-Element/CafeMenuContainer";
import CafeMenuImgItem from "./C-Menu-Element/CafeMenuImgItem";
import CafeMenuH1 from "./C-Menu-Element/CafeMenuH1";
import CafeLink from "./C-Menu-Element/CafeLink";
import CafeMenuBox from "./C-Menu-Element/CafeMenuBox";

function EspressoMenu() {
  // eslint-disable-next-line
  const [espImages, setEspImages] = useState(EspJson.espimages);

  return (
    <div>
      <CafeMenuH1>
        <CafeLink to="/Menu">Espresso Menu</CafeLink>
      </CafeMenuH1>

      <CafeMenuContainer>
        <CafeMenuBox>
          {espImages.map((esp, index) => (
            <CafeMenuImgItem key={index}>
              <img
                src={process.env.PUBLIC_URL + `/images/${esp.espUrl}`}
                alt={esp.esp_name}
              />
              <p>{esp.esp_name}</p>
            </CafeMenuImgItem>
          ))}
        </CafeMenuBox>
      </CafeMenuContainer>
    </div>
  );
}

export default EspressoMenu;

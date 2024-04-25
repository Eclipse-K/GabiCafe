import { useState } from "react";
import BeverJson from "./CafeMenu.json";
import CafeMenuContainer from "./C-Menu-Element/CafeMenuContainer";
import CafeMenuImgItem from "./C-Menu-Element/CafeMenuImgItem";
import CafeMenuH1 from "./C-Menu-Element/CafeMenuH1";
import CafeLink from "./C-Menu-Element/CafeLink";

function Beverage() {
  // eslint-disable-next-line
  const [beverImages, setBeverImages] = useState(BeverJson.beverimages);

  return (
    <div>
      <CafeMenuH1>
        <CafeLink to="/Menu">Beverage</CafeLink>
      </CafeMenuH1>

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
    </div>
  );
}

export default Beverage;

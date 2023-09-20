import { useState } from "react";
import Navbar from "../../Navbar";
import BeverJson from "./CafeMenu.json";
import CafeMenuContainer from "./C-Menu-Element/CafeMenuContainer";
import CafeMenuImgItem from "./C-Menu-Element/CafeMenuImgItem";

function Beverage() {
  // eslint-disable-next-line
  const [beverImages, setBeverImages] = useState(BeverJson.beverimages);

  return (
    <div>
      <Navbar />
      <CafeMenuContainer>
        <h1>Beverage</h1>

        {beverImages.map((bever, index) => (
          <CafeMenuImgItem>
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

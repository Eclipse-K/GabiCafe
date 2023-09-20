import { useState } from "react";
import Navbar from "../../Navbar";
import TeaJson from "./CafeMenu.json";
import CafeMenuContainer from "./C-Menu-Element/CafeMenuContainer";
import CafeMenuImgItem from "./C-Menu-Element/CafeMenuImgItem";

function Tea() {
  // eslint-disable-next-line
  const [teaImages, setTeaImages] = useState(TeaJson.teaimages);

  return (
    <div>
      <Navbar />
      <CafeMenuContainer>
        <h1>Tea</h1>

        {teaImages.map((tea, index) => (
          <CafeMenuImgItem key={index}>
            <img
              src={process.env.PUBLIC_URL + `/images/${tea.teaUrl}`}
              alt={tea.tea_name}
            />
            <p>{tea.tea_name}</p>
          </CafeMenuImgItem>
        ))}
      </CafeMenuContainer>
    </div>
  );
}

export default Tea;

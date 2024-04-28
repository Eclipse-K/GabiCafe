import { useState } from "react";
import TeaJson from "./CafeMenu.json";
import CafeMenuContainer from "./C-Menu-Element/CafeMenuContainer";
import CafeMenuImgItem from "./C-Menu-Element/CafeMenuImgItem";
import CafeMenuH1 from "./C-Menu-Element/CafeMenuH1";
import CafeLink from "./C-Menu-Element/CafeLink";
import CafeMenuBox from "./C-Menu-Element/CafeMenuBox";

function Tea() {
  // eslint-disable-next-line
  const [teaImages, setTeaImages] = useState(TeaJson.teaimages);

  return (
    <div>
      <CafeMenuH1>
        <CafeLink to="/Menu">Tea</CafeLink>
      </CafeMenuH1>

      <CafeMenuContainer>
        <CafeMenuBox>
          {teaImages.map((tea, index) => (
            <CafeMenuImgItem key={index}>
              <img
                src={process.env.PUBLIC_URL + `/images/${tea.teaUrl}`}
                alt={tea.tea_name}
              />
              <p>{tea.tea_name}</p>
            </CafeMenuImgItem>
          ))}
        </CafeMenuBox>
      </CafeMenuContainer>
    </div>
  );
}

export default Tea;

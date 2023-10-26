import { useState } from "react";
import Navbar from "../../Navbar";
import TeaJson from "./CafeMenu.json";
import CafeMenuContainer from "./C-Menu-Element/CafeMenuContainer";
import CafeMenuImgItem from "./C-Menu-Element/CafeMenuImgItem";
import ReverseButton from "./C-Menu-Element/ReverseButton";
import { Link } from "react-router-dom";
import { CiUndo } from "react-icons/ci";

function Tea() {
  // eslint-disable-next-line
  const [teaImages, setTeaImages] = useState(TeaJson.teaimages);

  return (
    <div>
      <Navbar />
      <h1>Tea</h1>
      <CafeMenuContainer>
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
      <ReverseButton>
        <Link className="Reverse-link" to="/Menu">
          <CiUndo className="Reverse-icon" />
        </Link>
      </ReverseButton>
    </div>
  );
}

export default Tea;

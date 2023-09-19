import EspMenuContainer from "./E-Menu-Element/EspMenuContainer";
import Navbar from "../../Navbar";
import jsonData from "./EspressoMenu.json";
import { useState } from "react";
import "./Esp.css";

function EspressoMenu() {
  const [images, setImages] = useState(jsonData.images);
  console.log(images);

  return (
    <div>
      <Navbar />
      <EspMenuContainer>
        <h1>Image Gallery</h1>
        <div className="image-container">
          {images.map((image, index) => (
            <div key={index} className="image-item">
              <img
                src={process.env.PUBLIC_URL + `/images/${image.imageUrl}`}
                alt={image.image_name}
              />
              <p>{image.image_name}</p>
            </div>
          ))}
        </div>
        <img src={require("../Images/Espresso.png")} alt="am" />
      </EspMenuContainer>
    </div>
  );
}

export default EspressoMenu;

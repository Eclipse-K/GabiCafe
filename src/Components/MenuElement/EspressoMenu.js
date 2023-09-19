import { useState } from "react";
import Navbar from "../../Navbar";
import EspJson from "./EspressoMenu.json";
import EspMenuContainer from "./E-Menu-Element/EspMenuContainer";
import EspMenuImgItem from "./E-Menu-Element/EspMenuImgItem";

function EspressoMenu() {
  // eslint-disable-next-line
  const [images, setImages] = useState(EspJson.images);

  return (
    <div>
      <Navbar />
      <EspMenuContainer>
        <h1>Espresso Menu</h1>

        {images.map((image, index) => (
          <EspMenuImgItem key={index}>
            <img
              src={process.env.PUBLIC_URL + `/images/${image.imageUrl}`}
              alt={image.image_name}
            />
            <p>{image.image_name}</p>
          </EspMenuImgItem>
        ))}
      </EspMenuContainer>
    </div>
  );
}

export default EspressoMenu;

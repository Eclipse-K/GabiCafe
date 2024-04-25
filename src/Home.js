import React, { useState, useEffect } from "react";
import "./Home.css";
import Seokjojeon from "./Components/Images/Deoksugung_Seokjojeon.jpeg";
import SeokjojeonI from "./Components/Images/Seokjojeon_Inside.jpeg";
import Jeonggwanheon from "./Components/Images/DeoksugungJeonggwanheon.jpeg";
import TraditionHouseF from "./Components/Images/TraditionHouse_Front.png";
import TraditionHouseI from "./Components/Images/TraditionHouse_Inside.png";
import Food_1 from "./Components/Images/Food_1.png";
import Food_2 from "./Components/Images/Food_2.jpeg";
import Food_3 from "./Components/Images/Food_3.png";
import Food_4 from "./Components/Images/Food_4.png";
import Food_5 from "./Components/Images/Food_5.png";

function Home() {
  const images = [
    Seokjojeon,
    SeokjojeonI,
    Jeonggwanheon,
    TraditionHouseF,
    TraditionHouseI,
  ];
  const FoodImage = [Food_1, Food_2, Food_3, Food_4, Food_5];
  const imageCount = images.length;
  const FoodImageCount = FoodImage.length;

  const [homeImage, sethomeImage] = useState(0);
  const [homeFoodImage, setHomeFoddImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // 다음 이미지로 이동
      sethomeImage((prevIndex) => (prevIndex + 1) % imageCount);
      setHomeFoddImage((prevIndex) => (prevIndex + 1) % FoodImageCount);
    }, 5000); // 5초마다 이미지 변경

    return () => {
      // 컴포넌트가 unmount 되면 타이머를 정리합니다.
      clearInterval(intervalId);
    };
  }, [imageCount, FoodImageCount]);

  return (
    <div className="Home-Container">
      <div className="Home">
        <div className="Slide-container">
          <div className="Slide-img-box">
            <img
              className="Slide-img"
              src={images[homeImage]}
              alt={`Cat ${homeImage + 1}`}
            />
          </div>

          <div className="index-content">
            <div className="index-content-title">
              <h2>공지사항</h2>
              <button>more +</button>
            </div>
          </div>

          <div className="index-information">
            <div className="index-information-title">
              <h2>안내</h2>
              <button>more +</button>
            </div>
          </div>

          <div className="Slide-Fimg-box">
            <img
              className="Slide-Food-img"
              src={FoodImage[homeFoodImage]}
              alt={`Cat ${homeFoodImage + 1}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

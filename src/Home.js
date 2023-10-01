import React, { useState, useEffect } from "react";
import "./Home.css";
import Navbar from "./Navbar";
import Seokjojeon from "./Components/Images/Deoksugung_Seokjojeon.jpeg";
import SeokjojeonI from "./Components/Images/Seokjojeon_Inside.jpeg";
import Jeonggwanheon from "./Components/Images/DeoksugungJeonggwanheon.jpeg";
import TraditionHouseF from "./Components/Images/TraditionHouse_Front.png";
import TraditionHouseI from "./Components/Images/TraditionHouse_Inside.png";
import Food_1 from "./Components/Images/Food_1.png";
import Food_2 from "./Components/Images/Food_2.jpeg";
import Copyright from "./Components/Copyright";

function Home() {
  const images = [
    Seokjojeon,
    SeokjojeonI,
    Jeonggwanheon,
    TraditionHouseF,
    TraditionHouseI,
  ];
  const FoodImage = [Food_1, Food_2];
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
    <div>
      <Navbar />

      <div className="Home">
        <img
          className="Slide-img"
          src={images[homeImage]}
          alt={`Cat ${homeImage + 1}`}
        />
        <img
          className="Slide-Food-img"
          src={FoodImage[homeFoodImage]}
          alt={`Cat ${homeFoodImage + 1}`}
        />
      </div>

      <Copyright />
    </div>
  );
}

export default Home;

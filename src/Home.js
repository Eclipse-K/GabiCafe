import React, { useState, useEffect } from "react";
import "./Home.css";
import Navbar from "./Navbar";
import Gyeongbokgung from "./Components/Images/Gyeongbokgung_Palace.jpg";
import GyeonghoeruPavilion from "./Components/Images/GyeonghoeruPavilion.png";
import Gwanghwamun from "./Components/Images/Gwanghwamun.png";
import BuyongjeongPavilion from "./Components/Images/BuyongjeongPavilion.png";
import Seokjojeon from "./Components/Images/Deoksugung_Seokjojeon.jpeg";
import Jeonggwanheon from "./Components/Images/DeoksugungJeonggwanheon.jpeg";
import Copyright from "./Components/Copyright";

function Home() {
  const images = [
    Gyeongbokgung,
    GyeonghoeruPavilion,
    Gwanghwamun,
    BuyongjeongPavilion,
    Seokjojeon,
    Jeonggwanheon,
  ];
  const imageCount = images.length;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // 다음 이미지로 이동
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageCount);
    }, 5000); // 5초마다 이미지 변경

    return () => {
      // 컴포넌트가 unmount 되면 타이머를 정리합니다.
      clearInterval(intervalId);
    };
  }, [imageCount]);

  return (
    <div>
      <Navbar />

      <div className="Home">
        <img
          className="Slide-img"
          src={images[currentImageIndex]}
          alt={`Cat ${currentImageIndex + 1}`}
        />
      </div>

      <Copyright />
    </div>
  );
}

export default Home;

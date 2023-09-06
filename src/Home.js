import "./Home.css";
import Navbar from "./Navbar";

function Home() {
  return (
    <div>
      <Navbar />

      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item item1 active d-block w-100"></div>
          <div className="carousel-item item2 d-block w-100"></div>
          <div className="carousel-item item3 d-block w-100"></div>
          <div className="carousel-item item4 d-block w-100"></div>
          <div className="carousel-item item5 d-block w-100"></div>
          <div className="carousel-item item6 d-block w-100"></div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Home;

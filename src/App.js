import "./App.css";
import { Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import Products from "./Components/Products";
import Login from "./Components/Login";
import EspressoMenu from "./Components/MenuElement/EspressoMenu";
import LatteMenu from "./Components/MenuElement/LatteMenu";
import Beverage from "./Components/MenuElement/Beverage";
import Blended from "./Components/MenuElement/Blended";
import Tea from "./Components/MenuElement/Tea";
import Smoothie from "./Components/MenuElement/Smoothie";
import Copyright from "./Components/Copyright";
import Information from "./Components/Information";
// import ReactSwitch from "react-switch";
import Home from "./Home";
import Navbar from "./Navbar";

function App() {
  // const [modeChange, setModeChange] = useState(false);

  // // 모드 변경 함수
  // // const toggleModeChange = () => {
  // //   setModeChange(!modeChange);
  // // };

  // // 사용자의 환경 설정에 따라 모드를 자동으로 변경
  // useEffect(() => {
  //   const prefersDarkMode = window.matchMedia(
  //     "(prefers-color-scheme: dark)"
  //   ).matches;
  //   setModeChange(prefersDarkMode);
  // }, []);

  return (
    // <div className={modeChange ? "dark-mode" : "light-mode"}>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Information" element={<Information />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/EspressoMenu" element={<EspressoMenu />} />
        <Route path="/LatteMenu" element={<LatteMenu />} />
        <Route path="/Beverage" element={<Beverage />} />
        <Route path="/Blended" element={<Blended />} />
        <Route path="/Tea" element={<Tea />} />
        <Route path="/Smoothie" element={<Smoothie />} />
      </Routes>
      {/* <ReactSwitch onChange={toggleModeChange} checked={modeChange} /> */}
      <Copyright />
    </div>
  );
}

export default App;

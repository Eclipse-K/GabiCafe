import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
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

function App() {
  return (
    <div className="App">
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

      <Copyright />
    </div>
  );
}

export default App;

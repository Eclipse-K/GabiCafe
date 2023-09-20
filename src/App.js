import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Menu from "./Components/Menu";
import Products from "./Components/Products";
import Login from "./Components/Login";
import EspressoMenu from "./Components/MenuElement/EspressoMenu";
import LatteMenu from "./Components/MenuElement/LatteMenu";
import Beverage from "./Components/MenuElement/Beverage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/EspressoMenu" element={<EspressoMenu />} />
        <Route path="/LatteMenu" element={<LatteMenu />} />
        <Route path="/Beverage" element={<Beverage />} />
      </Routes>
    </div>
  );
}

export default App;

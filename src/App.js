import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Menu from "./Components/Menu";
import Products from "./Components/Products";
import Login from "./Components/Login";
import EspressoMenu from "./Components/MenuElement/EspressoMenu";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/EspressoMenu" element={<EspressoMenu />} />
      </Routes>
    </div>
  );
}

export default App;

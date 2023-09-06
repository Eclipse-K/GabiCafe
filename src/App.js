import "./App.css";
import Menu from "./Components/Menu";
import { Routes, Route } from "react-router-dom";
import Products from "./Components/Products";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;

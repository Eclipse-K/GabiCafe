import "./App.css";
import Menu from "./Components/Menu";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Products from "./Components/Products";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;

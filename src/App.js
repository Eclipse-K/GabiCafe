import "./App.css";
import Menu from "./Components/Menu";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/Menu" element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;

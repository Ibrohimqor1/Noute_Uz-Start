import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Lenovo from "../src/Pages/Lenovo"
import Asus from "./Pages/Asus";
import Hp from "./Pages/Hp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lenovo" element={<Lenovo/>} />
        <Route path="/asus" element={<Asus/>} />
        <Route path="/Hp" element={<Hp/>} />
        {/* <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} /> */}
      </Routes>
    </div>
  );
}
// ggo
export default App;

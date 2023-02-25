import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Lenovo from "./Pages/Lenovo"
import Asus from "./Pages/Asus";
import Admin from "../src/AdminPanel/Admin";
import Post from "./AdminPanel/Post"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lenovo" element={<Lenovo/>} />
        <Route path="/asus" element={<Asus/>} />
       <Route path="/admin" element={<Admin />} /> 
        <Route path="/post" element={<Post />} />
      </Routes>
    </div>
  );
}
// ggo
export default App;

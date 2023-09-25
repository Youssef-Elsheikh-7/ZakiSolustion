import "./App.css";
import Navbar from "./Components/Navbar";
import "aos/dist/aos.css";
import Footer from "./Components/Footer";
import CopyRight from "./Components/CopyRight";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import Rules from "./Components/Rules";
import ContactUs from "./Components/ContactUs";
import Next from "./Components/Next";
import Main from "./Components/Main";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/aboutUs" element={<AboutUs />}></Route>
        <Route path="/rules" element={<Rules />}></Route>
        <Route path="/contactUs" element={<ContactUs />}></Route>
        <Route path="/next" element={<Next />}></Route>
      </Routes>
      <Footer />
      <CopyRight />
    </div>
  );
}

export default App;

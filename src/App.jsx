import "./App.css";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Slideshow from "./components/Slideshow";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
   return (
      <Router>
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
         </Routes>
      </Router>
   );
}

export default App;

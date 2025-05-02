import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Genres from "./Products/Genres";
import Songs from "./Products/Songs";
import Albums from './Products/Album';
import Artists from "./Products/Artists";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/genres" element={<Genres />} />
          <Route path="/products/songs" element={<Songs />} />
          <Route path="/products/albums" element={<Albums />} />
          <Route path="/products/artists" element={<Artists />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

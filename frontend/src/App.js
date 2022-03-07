import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/index.js";
import About from "./components/About/index.js";
import Team from "./components/Team/index.js";
import Roadmap from "./components/Roadmap/index.js";
import Shop from "./components/Shop/index.js";
import Shoe from "./components/Shoe/index.js";
// import Navbar from "./components/Navbar/index";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/roadmap" element={<Roadmap />} /> */}
        {/* <Route path="/team" element={<Team />} /> */}
        {/* <Route path="/shop" element={<Shop />} /> */}
        {/* <Route path="/shoe" element={<Shoe />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

import "./App.css";
import Home from "./components/HomePage/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainfilter from "./components/FilterPage/mainfilter";
import ThemePractice from "./components/HomePage/theme";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/find" element={<Mainfilter />} />
          <Route exact path="/abc" element={<ThemePractice />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import "./App.css";
import Home from "./components/HomePage/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainfilter from "./components/FilterPage/mainfilter";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/find" element={<Mainfilter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

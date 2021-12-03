import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FilterPage from "./components/FilterPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/find" element={<FilterPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// import "./App.css";
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Header from "./components/Header.js";
import Favorite from "./components/Favorite.js";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<><Header /><Home /></>} />
        <Route exact path="/login" element={<><Header /><Login /></>} />
        <Route exact path="/favorite" element={<Favorite />} />
      </Routes>
    </Router>

  );
}

export default App;

// import "./App.css";
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Header from "./components/Header.js";
import Favorite from "./components/Favorite.js";
import Checkout from "./components/Checkout.js";
import Adidas from "./components/Adidas.js";
import Nike from "./components/Nike.js";
import Skechers from "./components/Skechers.js";
import Puma from "./components/Puma.js";
import Reebok from "./components/Reebok.js";
import Filter from "./components/Filter.js";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<><Header /><Home /></>} />
        {/* <Route exact path="/login" element={<><Header /><Login /></>} /> */}
        <Route exact path="/favorite" element={<><Header /><Favorite /></>} />
        <Route exact path="/checkout" element={<><Header /><Checkout /></>} />
        <Route exact path="/adidas" element={<><Header /><Adidas /></>} />
        <Route exact path="/nike" element={<><Header /><Nike /></>} />
        <Route exact path="/skechers" element={<><Header /><Skechers /></>} />
        <Route exact path="/puma" element={<><Header /><Puma /></>} />
        <Route exact path="/reebok" element={<><Header /><Reebok /></>} />
        <Route exact path="/filter" element={<><Header /><Filter /></>} />
      </Routes>
    </Router>

  );
}

export default App;

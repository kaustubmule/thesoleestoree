// import "./App.css";
import Home from "./components/Home.js";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Header from "./components/Header.js";
import Favorite from "./components/Favorite.js";
import Checkout from "./components/Checkout.js";
import Adidas from "./components/Brands/Adidas.js";
import Nike from "./components/Brands/Nike.js";
import Skechers from "./components/Brands/Skechers.js";
import Puma from "./components/Brands/Puma.js";
import Reebok from "./components/Brands/Reebok.js";
import NewBalance from "./components/Brands/NewBalance.js";
import Processing from "./components/Processing.js";
import Filter from "./components/Filter.js";
import { useStateValue } from "./components/StateProvider.js";
import React, { useState, useEffect } from "react";
import Loader from "./components/Loader/Loader.js";

function App() {
  const [{ user }, dispatch] = useStateValue();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 900)
  }, [])

  return (
    <Router>
      {
        loading ? <Loader /> :
          <Routes>
            <Route exact path="/" element={<><Header /><Home /></>} />
            <Route exact path="/favorite" element={<><Header /><Favorite /></>} />
            <Route exact path="/checkout" element={<><Header /><Checkout /></>} />
            <Route exact path="/adidas" element={<><Header /><Filter /><Adidas /></>} />
            <Route exact path="/nike" element={<><Header /><Filter /><Nike /></>} />
            <Route exact path="/skechers" element={<><Header /><Filter /><Skechers /></>} />
            <Route exact path="/puma" element={<><Header /><Filter /><Puma /></>} />
            <Route exact path="/reebok" element={<><Header /><Filter /><Reebok /></>} />
            <Route exact path="/skechers" element={<><Header /><Filter /><Skechers /></>} />
            <Route exact path="/newbalance" element={<><Header /><Filter /><NewBalance /></>} />
            <Route exact path="/filter" element={<><Header /><Filter /><Nike /></>} />
            <Route exact path="/processing" element={<Processing />} />

          </Routes>
      }

    </Router>

  );
}

export default App;

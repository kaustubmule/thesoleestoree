import React from 'react'
import "./Filter.css";
import { Link } from "react-router-dom";

function Filter(props) {
    return (
        <div className="filter_shoes">
            <Link to="/nike">
                <button className="brandShoes">NIKE</button>
            </Link>
            <Link to="/adidas">
                <button className="brandShoes">ADIDAS</button>
            </Link>
            <Link to="/puma">
                <button className="brandShoes">PUMA</button>
            </Link>
            <Link to="/skechers">
                <button className="brandShoes">SKECHERS</button>
            </Link>
            <Link to="/reebok">
                <button className="brandShoes">REEBOK</button>
            </Link>
        </div>
    );
}

export default Filter
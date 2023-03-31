import React from 'react'
import "./css/Filter.css";
import { Link } from "react-router-dom";

function Filter(props) {
    return (
        <div className="flloat">
            <div className="filter_shoes">
                <Link to="/nike">
                    <button className="brandShoes"><img className="image" src="https://logowik.com/content/uploads/images/260_nike.jpg" alt="Nike" /></button>
                </Link>
                <Link to="/adidas">
                    <button className="brandShoes"><img className="image" src="https://img.freepik.com/free-icon/adidas_318-565831.jpg" alt="ADIDAS" /></button>
                </Link>
                <Link to="/puma">
                    <button className="brandShoes"><img className="image" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTjeqny1RlciCY-l8a4RS8ZUCg1tHgwvI11g-bq_nw8bxEE30eY" alt="Nike" /></button>
                </Link>
                <Link to="/skechers">
                    <button className="brandShoes"><img className="image" src="http://sh.skechers.com/logos/images/CORP_SKX_S_LOGO_WEB_LOGO_black.jpg" alt="Nike" /></button>
                </Link>
                <Link to="/reebok">
                    <button className="brandShoes"><img className="image" src="https://preview.thenewsmarket.com/Previews/RBOK/StillAssets/1920x1080/551064.png" alt="Nike" /></button>
                </Link>
                <Link to="/newbalance">
                    <button className="brandShoes"><img className="image" src="https://logos-world.net/wp-content/uploads/2020/09/New-Balance-Emblem.png" alt="Nike" /></button>
                </Link>
            </div>
        </div>

    );
}

export default Filter
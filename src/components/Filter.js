import React from 'react'
import "./Filter.css";
import { Link } from "react-router-dom";

function Filter(props) {
    return (
        <div>
            <Link to="/nike">
                <div className="showMore_shoes"> 
                    <button className="showMore"> SHOW NIKE </button>
                </div>
            </Link>
        </div>
    );
}

export default Filter
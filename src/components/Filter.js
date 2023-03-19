import React from 'react'
import "./Filter.css";
import Product from "./Product.js";

function Filter() {
    return (
        <div>
            <div class="post-filter container">
                <span class="filter-item active-filter" data-filter="all"> Nike </span>
                <span class="filter-item active-filter" data-filter="all"> Adidas </span>
                <span class="filter-item active-filter" data-filter="all"> Puma </span>
                <span class="filter-item active-filter" data-filter="all"> Reebok </span>
                <span class="filter-item active-filter" data-filter="all"> Skechers </span>
            </div>
     
        </div>
    )
}

export default Filter
import React, { useContext, useState } from "react";
import { Context } from "../Context/ContextApi";

function Filter() {
    const data = useContext(Context);

    const { productData, setCategoryData } = data;

    const catrgoryHandler = (e) => {
        let categoryValue = e.target.value;

        if (categoryValue === "All") {
            setCategoryData(productData);
        } else {
            setCategoryData(
                productData.filter((item) => item.category === categoryValue)
            );
        }
    };

    return (
        <div className="mt-11 mb-5 border-2 w-fit outline-none rounded">
            <select onChange={catrgoryHandler}>
                <option value="All">All</option>
                <option value="Shoes">Shoes</option>
                <option value="Clothing">Clothing</option>
                <option value="Electronics">Electronics</option>
                <option value="Furniture">Furniture</option>
                <option value="Accessories">Accessories</option>
            </select>
        </div>
    );
}

export default Filter;

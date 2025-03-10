import React, { useContext, useState } from "react";
import { Context } from "../Context/ContextApi";

function Filter() {
    const data = useContext(Context);

    const { productData, setCategoryData, filterData } = data;

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
        <div className="flex items-center mb-7 gap-2">
            <select
                onChange={catrgoryHandler}
                className="px-4 py-2 capitalize bg-gray-800 text-white rounded-lg shadow-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
                {filterData.map((item, idx) => (
                    <option className="capitalize" key={idx} value={item}>
                        {item}
                    </option>
                ))}

            </select>
        </div>
    );
}

export default Filter;

import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();

function ContextApi({ children }) {
    const [productData, setProductData] = useState(() => {
        const storedData = localStorage.getItem("product");
        return storedData ? JSON.parse(storedData) : [];
    });

    const [categoryData, setCategoryData] = useState([]);
    const [cartData, setCartData] = useState([]);
    const [filterData, setFilterData] = useState(() => {
        return JSON.parse(localStorage.getItem("filters")) || [
            "all",
            "electronics",
            "jewelery",
            "men's clothing",
            "women's clothing",
        ];
    });

    const callApi = async () => {
        try {
            const { data } = await axios.get("https://fakestoreapi.com/products");
            setProductData(data);
            localStorage.setItem("product", JSON.stringify(data));
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        localStorage.setItem("product", JSON.stringify(productData));
    }, [productData]);

    useEffect(() => {
        localStorage.setItem("filters", JSON.stringify(filterData));
    }, [filterData])

    useEffect(() => {
        if (productData.length === 0) {
            callApi();
        }
    }, []);

    const contextData = {
        productData,
        setProductData,
        categoryData,
        setCategoryData,
        cartData,
        setCartData,
        setFilterData,
        filterData
    };

    return <Context.Provider value={contextData}>{children}</Context.Provider>;
}

export default ContextApi;

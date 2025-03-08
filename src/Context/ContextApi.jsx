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


    const callApi = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/products");
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
    };

    return <Context.Provider value={contextData}>{children}</Context.Provider>;
}

export default ContextApi;

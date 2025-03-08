import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";
import { Context } from "../Context/ContextApi";

const ProductDetail = () => {
    const { id } = useParams();
    const data = useContext(Context);
    const { productData, setCartData, cartData } = data;

    const productDetail = productData[Number(id)];

    const cartHandler = () => {
        setCartData((prevCart) =>
            prevCart.some((item) => item.id === productDetail.id)
                ? prevCart.map((item) =>
                    item.id === productDetail.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
                : [...prevCart, { ...productDetail }]
        );
    };

    return (
        productDetail && (
            <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6">
                <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">
                    <motion.div
                        className="md:w-96 w-52"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src={productDetail.image || "https://i.pinimg.com/236x/48/a5/a6/48a5a6e0c7b28378ff79397e07282d06.jpg"}
                            alt={productDetail.name}
                            className="w-full rounded-lg shadow-lg sm:mt-0 mt-20"
                        />
                    </motion.div>

                    <motion.div
                        className="w-full md:w-1/2 space-y-6"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl font-bold">{productDetail.name}</h1>
                        <p className="text-lg text-gray-400">{productDetail.description}</p>
                        <p className="text-md text-gray-300 italic">
                            Category: {productDetail.category}
                        </p>

                        <div className="flex items-center gap-2 text-yellow-400">
                            {[...Array(5)].map((_, index) => (
                                <Star
                                    key={index}
                                    fill={index < Math.round(productDetail.rating) ? "#facc15" : "none"}
                                    stroke="#facc15"
                                />
                            ))}
                            <span className="text-gray-300">({productDetail.rating})</span>
                        </div>

                        <p className="text-2xl font-semibold">${productDetail.price}</p>

                        <motion.button
                            onClick={cartHandler}
                            className="px-6 py-3 cursor-pointer bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-2 text-lg shadow-lg transition"
                            whileTap={{ scale: 0.9 }}
                        >
                            <ShoppingCart className="w-6 h-6" /> Add to Cart
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        )
    );
};

export default ProductDetail;

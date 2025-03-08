import React, { useContext } from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { Context } from "../Context/ContextApi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const data = useContext(Context);

    const { cartData } = data;

    return (
        <nav className="bg-gray-900 text-white py-4 px-6 shadow-md fixed border-b-[1px] border-white/20 w-full z-50">
            <div className="container mx-auto flex justify-between items-center">

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="focus:outline-none cursor-pointer"
                >
                    <Menu className="w-6 h-6" />
                </button>

                <motion.div
                    className="text-2xl font-bold tracking-wide"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    NeonSphere
                </motion.div>

                <Link to="/cart">
                    <motion.button whileTap={{ scale: 0.9 }} className="relative">
                        <ShoppingCart className="w-6 h-6 cursor-pointer" />
                        <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-1">
                            {cartData.length}
                        </span>
                    </motion.button>
                </Link>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: -300 }}
                        animate={{ x: 0, transition: { duration: 0.5 } }}
                        exit={{ x: -350, transition: { duration: 0.5 } }}
                        className="fixed top-0 left-0 h-full w-[70%] md:w-1/4 sm:w-2/3 bg-gray-800 p-6 space-y-4 shadow-lg z-50"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4"
                        >
                            <X className="w-6 h-6 text-white" />
                        </button>
                        <Link to="/createProduct"
                            onClick={() => setIsOpen(false)}

                            className="flex mb-5 mt-10 cursor-pointer items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            <Plus className="w-5 h-5" />
                            <span>Add Product</span>
                        </Link>
                        {["Home", "Shop", "About", "Contact"].map((item, index) => (
                            <Link
                                onClick={() => setIsOpen(false)}
                                to={item === "Home" ? "/" : item.toLowerCase()}
                                key={index}
                                className="block py-4 text-lg hover:text-gray-400 transition"
                            >
                                {item}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

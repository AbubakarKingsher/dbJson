import { useContext, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Context } from "../Context/ContextApi";
import { Link } from "react-router-dom";

const CartPage = () => {

    const data = useContext(Context);

    const { setCartData, cartData } = data;

    const removeItem = (id) => {
        setCartData((prevCart) => prevCart.filter((item) => item.id !== id));

    };

    const totalPrice = cartData.reduce(
        (total, item) => total + item.price * 1,
        0
    );

    return (
        <div className="pt-20 min-h-screen bg-gray-100 text-black">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
                {cartData.length === 0 ? (
                    <p className="text-gray-500 text-center">Your cart is empty.</p>
                ) : (
                    <div>
                        {cartData.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between border-b py-4"
                            >
                                <div className="flex items-center gap-4">
                                    <img
                                        src={item.image || "https://i.pinimg.com/236x/48/a5/a6/48a5a6e0c7b28378ff79397e07282d06.jpg"}
                                        alt={item.name}
                                        className="h-16 object-cover rounded-lg"
                                    />
                                    <div>
                                        <h3 className="font-medium">{item.title}</h3>
                                        <p className="text-sm text-gray-500">
                                            {1} x  ${item.price}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <p className="font-semibold">${item.price * 1}</p>
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="text-red-500 hover:text-red-700 cursor-pointer"
                                    >
                                        <FaTrash />
                                    </button>
                                </div>
                            </div>
                        ))}
                        <div className="mt-6 flex justify-between items-center">
                            <h3 className="text-xl font-semibold">Total:</h3>
                            <p className="text-2xl font-bold">${totalPrice}</p>
                        </div>
                        <Link to="/checkout" className="mt-4 w-full inline-block text-center cursor-pointer bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                            Proceed to Checkout
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;
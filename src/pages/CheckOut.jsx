import React, { useContext } from "react";
import { useState } from "react";
import { ShoppingCart, CreditCard } from "lucide-react";
import { Context } from "../Context/ContextApi";

const CheckoutPage = () => {
  const data = useContext(Context);

  const { setCartData, cartData } = data;

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    card: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState(false);

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const checkoutHandle = (e) => {
    if (cartData.length > 0) {
      e.preventDefault();

      setCompleted(true);
      setTimeout(() => {
        setCompleted(false);
      }, 2500);

      setIsSubmitted(true);
      setForm({ name: "", email: "", address: "", card: "" });
      setCartData([]);
    } else {
      e.preventDefault();
      setError(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center text-black justify-center bg-gray-100 p-6 pt-20">
      <form
        onSubmit={checkoutHandle}
        className="w-full max-w-md bg-white p-6 rounded-2xl shadow-xl"
      >
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
          <ShoppingCart className="w-6 h-6 text-blue-500" /> Checkout
        </h2>
        {!isSubmitted ? (
          <>
            <div className="mb-4">
              <label className="700 block mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                onChange={changeHandler}
                value={form.value}
                placeholder="Name"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                onChange={changeHandler}
                value={form.value}
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1">Address</label>
              <input
                type="text"
                name="address"
                required
                onChange={changeHandler}
                value={form.value}
                placeholder="Address"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="700 block mb-1">Card Details</label>
              <input
                type="number"
                name="card"
                required
                onChange={changeHandler}
                value={form.value}
                placeholder="**** **** **** ****"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition">
              <CreditCard className="w-5 h-5" /> Pay Now
            </button>
          </>
        ) : (
          <div className="flex gap-2 justify-center h-72 flex-col items-center text-xl font-semibold">
            <h2>Payment Successful!</h2>
            {completed && <img className="w-15" src="gif.gif" />}
          </div>
        )}
        {error && (
          <div className="text-red-600 py-2">
            Error: Please select any item before you can checkout!
          </div>
        )}
      </form>
    </div>
  );
};

export default CheckoutPage;

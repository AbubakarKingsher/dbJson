import React, { useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Context } from "../Context/ContextApi";
import { useState } from "react";
import { Plus } from "lucide-react";

const CreateProduct = () => {
    const data = useContext(Context);

    const { setProductData } = data;

    const [form, setForm] = useState({
        id: uuidv4(),
        name: "",
        price: "",
        category: "",
        image: "",
        description: "",
        rating: "",
        quantity: "",
    });

    const changeHandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const submitHandler = (e) => {
        e.preventDefault();

        setProductData((prev) => [
            ...prev,
            { ...form, [e.target.name]: e.target.value },
        ]);

        setForm({
            name: "",
            price: "",
            category: "",
            image: "",
            description: "",
            rating: "",
            quantity: "",
        })
    };

    return (
        <div className="h-screen">
            <div className="absolute top-[40px] h-fit left-1/2 transform -translate-x-1/2 w-full max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] p-6 mt-10 bg-gray-900 text-white rounded-lg shadow-lg overflow-auto">
                <h2 className="text-2xl font-bold mb-4 mt-5 text-center">
                    Create Product
                </h2>
                <form onSubmit={submitHandler}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        <input
                            type="text"
                            onChange={changeHandler}
                            name="name"
                            value={form.name}
                            placeholder="Product Name"
                            className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                        />

                        <input
                            type="number"
                            onChange={changeHandler}
                            name="price"
                            value={form.price}
                            placeholder="Price"
                            className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                        />

                        <input
                            type="text"
                            onChange={changeHandler}
                            name="category"
                            value={form.category}
                            placeholder="Category"
                            className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                        />

                        <input
                            type="text"
                            onChange={changeHandler}
                            name="image"
                            value={form.image}
                            placeholder="Image URL"
                            className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                        />

                        <input
                            type="text"
                            onChange={changeHandler}
                            name="description"
                            value={form.description}
                            placeholder="Description"
                            className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                        />

                        <input
                            type="text"
                            onChange={changeHandler}
                            name="rating"
                            value={form.rating}
                            placeholder="Rating"
                            className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                        />

                        <input
                            type="text"
                            onChange={changeHandler}
                            name="quantity"
                            value={form.quantity}
                            placeholder="Quantity"
                            className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div className="flex justify-center mt-10">
                        <button className="flex items-center cursor-pointer justify-center space-x-2 bg-blue-600 text-white px-7 py-3 rounded-lg hover:bg-blue-700 transition">
                            <Plus className="w-5 h-5" />
                            <span>Add Product</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateProduct;

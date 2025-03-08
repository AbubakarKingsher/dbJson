import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context/ContextApi";
import { Link } from "react-router-dom";

function Search() {
    const [filterdData, setFilterdData] = useState("");


    const data = useContext(Context);

    const { productData } = data;

    const searchHandler = (e) => {
        let searchResult = e.target.value;
        const filtering = searchResult
            ? productData.filter(item =>
                item.name.toLowerCase().includes(searchResult.toLowerCase())
            )
            : [];

        setFilterdData(filtering);
    };

    return (
        <div className="mx-auto w-fit my-10 flex items-center flex-col gap-2">
            <div className="border-2 px-2 py-1 rounded-full">
                <input
                    onChange={searchHandler}
                    className="outline-none py-1 text-xl leading-none px-3 sm:w-96 w-72"
                    type="text"
                    placeholder="Search..."
                />
            </div>
            {filterdData.length === 0 ? null : (
                <div className="scroll h-52 border-[#101828] border-2 p-2 sm:w-96 w-72 rounded-xl overflow-y-auto overflow-x-hidden">
                    {filterdData.map((item, idx) => (
                        <Link to={`productDetail/${item.id - 1}`} key={idx} className="h-32 w-full p-2 mb-2 rounded bg-fuchsia-200 flex gap-5 items-center">
                            <img className="h-full rounded w-32 object-cover" src={item.image || "https://i.pinimg.com/236x/48/a5/a6/48a5a6e0c7b28378ff79397e07282d06.jpg"} />
                            <div>
                                <h2 className="font-medium">{item.name}</h2>
                                <h2 className="font-medium mb-5">{item.category}</h2>
                                <h2 className="font-medium">{item.price} PKR</h2>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Search;

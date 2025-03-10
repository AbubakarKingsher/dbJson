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
                item.title.toLowerCase().includes(searchResult.toLowerCase())
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
                <div className="scroll h-52 border-[#101828] border-2 p-2 sm:w-96 w-72 rounded-xl text-white overflow-y-auto overflow-x-hidden">
                    {filterdData.map((item, idx) => (
                        <Link to={`productDetail/${item.id - 1}`} key={idx} className="h-26 w-full p-2 mb-2 rounded-md bg-[#101828] flex gap-3 items-center">
                            <img className="h-full w-20 rounded object-cover" src={item.image || "https://i.pinimg.com/236x/48/a5/a6/48a5a6e0c7b28378ff79397e07282d06.jpg"} />
                            <div>
                                <h2 className="font-medium">{item.title.length > 11 ? item.title.slice(0, 11) + "..." : item.title.slice(0, 11)}</h2>
                                <h2 className="font-medium text-sm opacity-55 mb-3">{item.category}</h2>
                                <h2 className="font-medium">${item.price}</h2>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Search;

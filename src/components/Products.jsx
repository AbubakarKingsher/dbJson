import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Context/ContextApi'
import { Link } from 'react-router-dom';
import Search from './Search';
import Filter from './Filter';

function Products() {

    const [proData, setProData] = useState(null);

    const data = useContext(Context);

    const { productData, categoryData } = data;

    useEffect(() => {
        setProData(productData);
        if (categoryData.length > 0) {
            setProData(categoryData);
        }
    }, [productData, categoryData]);


    return (
        <div className='max-w-6xl mx-auto p-6 text-black'>
            <h1 className='text-3xl font-bold text-center mb-6 text-black underline'>Our Products</h1>
            <Search />
            <Filter />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {proData && proData.map((product, idx) => (
                    <div key={idx} className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 rounded-lg'>
                        <img src={product.image || "https://i.pinimg.com/236x/48/a5/a6/48a5a6e0c7b28378ff79397e07282d06.jpg"} alt={product.name} className='h-52 mx-auto object-cover rounded-lg' />
                        <h2 className='text-xl font-semibold mt-2'>{product.title.length > 25 ? product.title.slice(0, 25) + "..." : product.title.slice(0, 25)}</h2>
                        <p className='text-gray-600'>{product.category}</p>
                        <p className='text-lg font-bold mt-1'>${product.price}</p>
                        <Link to={`/productDetail/${product.id - 1}`} className='mt-3 inline-block cursor-pointer px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 w-full'>
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products
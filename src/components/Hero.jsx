import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'

const Hero = () => {

    const images = [
        "https://plus.unsplash.com/premium_photo-1664201890375-f8fa405cdb7d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative sm:h-screen h-[60vh] text-white w-full overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
                {images.map((src, i) => (
                    <motion.div
                        key={i}
                        className="absolute inset-0 w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${src}` }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: i === index ? 1 : 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    />
                ))}
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-6">
                <motion.h1
                    className="text-4xl md:text-6xl font-bold"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Welcome to NeonSphere
                </motion.h1>
                <motion.p
                    className="mt-4 text-lg md:text-xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Discover the best products with amazing deals.
                </motion.p>
                <motion.a
                    className="mt-6 px-6 py-3 bg-blue-600 cursor-pointer rounded-lg shadow-lg hover:bg-blue-700 transition"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    Shop Now
                </motion.a>
            </div>
        </section>
    );
};

export default Hero
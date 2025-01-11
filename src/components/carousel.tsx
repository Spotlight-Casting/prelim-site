"use client"
import { useState } from 'react';

const images = [
    "/carousel/carousel1.png",
    "/carousel/carousel2.png",
    "/carousel/carousel3.png",
]

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="relative w-[450px]">
            <div className="flex overflow-hidden justify-center">
                <img 
                    src={images[currentIndex]} 
                    alt="carousel" 
                    className="w-[350px] h-[300px] rounded-xl"
                />
            </div>

            <img 
                src="/home/smallfilm.png" 
                alt="side of film reel for carousel" 
                className="absolute w-full top-0 h-[300px] "
            />

            <div className="flex justify-center mt-4">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 mx-1 rounded-full ${
                            index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                        }`}
                    />
                ))}
            </div>
        </div>
            )
} 
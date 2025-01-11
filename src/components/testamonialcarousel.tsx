"use client"
import { useState } from 'react';

const images = [
    "/tarousel/test1.png",
    "/tarousel/test1.png",
    "/tarousel/test1.png",
]

export default function Tarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative w-full mt-4">
            <div className="flex overflow-hidden justify-center">
                <img 
                    src={images[currentIndex]} 
                    alt="carousel" 
                    className="w-[900px] h-[350px] rounded-xl"
                />
            </div>

            <img 
                src="/home/bigfilm.png" 
                alt="side of film reel for carousel" 
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px]"
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
"use client"
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

const images = [
    "/carousel/carousel1.png",
    "/carousel/carousel2.png",
    "/carousel/carousel3.png",
]

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative w-full ">
            <div className="flex overflow-hidden justify-center">
                <img 
                    src={images[currentIndex]} 
                    alt="carousel" 
                    className="w-[400px] h-[400px]"
                />
            </div>
            <button onClick={goToPrevious}  className="absolute left-2 top-1/2">
                <ChevronLeft size={32} />
            </button>
            <button onClick={goToNext} className="absolute right-2 top-1/2">
                <ChevronRight size={32} />
            </button>
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
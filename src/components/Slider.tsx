"use client";
import { useState, useEffect } from "react";

const plants = [
  { id: 1, image: "/aloe.png",},
  {id: 2, image: "/aloe2.jpg",},
  { id: 3, image: "/aloe3.jpg" }
];

export default function PlantSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const time = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === plants.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(time);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full max-w-[400px] h-[400px] mx-auto flex justify-center items-center">
      <div className="relative w-full h-full bg-gray-50 rounded-lg overflow-hidden">
        {plants.map((plant, index) => (
          <div
            key={plant.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={plant.image}
              alt="aloe"
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-[-6%] xl:bottom-[16%] flex justify-center w-full space-x-2">
        {plants.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-green-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

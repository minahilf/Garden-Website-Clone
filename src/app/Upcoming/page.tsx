'use client'
import Image from "next/image";
import plant1 from "../../../public/plant1.png";
import plant2 from "../../../public/plant2.png";
import plant3 from "../../../public/plant3.png";
import plant4 from "../../../public/plant4.png";
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

export default function Upcoming() {
  const plants = [
    { id: 1, name: "Ivy", image: plant1 },
    { id: 2, name: "Jasmine", image: plant2 },
    { id: 3, name: "Rosemary", image: plant3 },
    { id: 4, name: "Gingko", image: plant4 },
  ];

  return (
    <motion.div
    variants={fadeIn('right', 0.2)}
    initial ="hidden"
    whileInView={"show"}
    viewport={{once: true, amount: 0.7}}
    className="bg-white p-4">
      <h1 className="text-black font-bold text-center text-[28px]">Upcoming Plants</h1>
      
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 items-center">
        {plants.map((plant) => (
          <div key={plant.id} className="flex flex-col items-center">
            <Image src={plant.image} alt={plant.name}  className="object-cover rounded-md" />
            <p className="text-center text-gray-800 font-semibold mt-2">{plant.name}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

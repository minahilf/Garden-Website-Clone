'use client'
import Image from "next/image";
import hang from "../../../public/hang.png";
import cactus from "../../../public/cactus.png";
import indoor from "../../../public/indoor.png";
import outdoor from "../../../public/outdoor.png";
import Link from "next/link";
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'


export default function Categories() {
  return (
    <motion.div
    variants={fadeIn('left', 0.1)}
        initial ="hidden"
        whileInView={"show"}
        viewport={{once: true, amount: 0.7}}
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 max-w-6xl mx-auto items-center gap-8 p-6">
      {/* Text Section */}
      <div className="px-4 flex flex-col justify-center items-center text-center sm:text-left sm:justify-start sm:items-start lg:gap-4">
        <h1 className="text-[28px] font-bold leading-10 xl:text-[36px] lg:w-[60%]">Explore from Categories</h1>
        <p className="text-[#68737F] leading-6 text-[14px] lg:text-[16px] lg:w-[80%]">
          There are different types of plants all around us, and most of us recognize many kinds of plants that flower, grow in our gardens, or that we can eat. There is a vast range in the types of plants that grow in the world.
        </p>
        <div className="w-[90px] h-[40px] bg-[#8BB178] duration-200 hover:bg-[#426830] cursor-pointer flex justify-center items-center mt-4 ">
        <Link href="/"> <button className="text-white font-medium text-[16px]">See All</button></Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="grid grid-cols-2 gap-4">
        {[
          { src: hang, label: "Hanging" },
          { src: cactus, label: "Cactus" },
          { src: indoor, label: "Indoor" },
          { src: outdoor, label: "Outdoor" },
        ].map((item, index) => (
          <div key={index} className="relative flex justify-center items-center">
            <Image src={item.src} alt={item.label} width={150} height={150} className="brightness-50 w-auto h-auto object-cover" />
            <p className="absolute text-white font-semibold text-[16px]">{item.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

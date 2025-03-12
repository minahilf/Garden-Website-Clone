'use client'
import Image from "next/image";
import icon from "../../../public/icon.png"
import PlantSlider from "@/components/Slider";
import {motion} from  "framer-motion"
import { fadeIn } from "@/variants";

export default function Main() {
    return (
      <motion.div
      variants={fadeIn('right', 0.1)}
              initial ="hidden"
              whileInView={"show"}
              viewport={{once: true, amount: 0.7}}
      className="p-4 sm:flex sm:items-center sm:justify-center sm:gap-10">
        <div className="flex-1 flex justify-center ">
          <PlantSlider />
        </div>
  
        <div className="flex-1 flex flex-col justify-center items-start mt-6 lg:mt-10">
          <h1 className="font-bold text-[28px] text-[#9DB97F]">Aloe Vera</h1>
          <p className="text-[16px] text-[#68737F] leading-7 max-w-md">
            Aloe produces two substances, gel and latex, which are used for medicines. 
            Aloe gel is the clear, jelly-like substance found in the inner part of the aloe plant leaf. 
            Aloe latex comes from just under the plant&apos;s skin and is yellow in color. 
            Some aloe products are made from the whole crushed leaf, so they contain both gel and latex.
          </p>
  
          <div className="flex gap-4 mt-4">
            <button className="bg-[#9DB97F] hover:bg-[#648048] transition duration-300  text-white font-medium px-4 py-2 rounded">Buy Now</button>
            <button className="border border-black text-black font-medium px-4 py-2 rounded transition duration-300 hover:border-white hover:bg-black hover:text-white">Explore Plants</button>
          </div>
          <div className="mt-8 cursor-pointer">
            <Image src={icon} alt="icons" />
        </div>
        </div>
      </motion.div>

    );
  }
  
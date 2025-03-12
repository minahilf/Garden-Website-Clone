'use client'
import Image from "next/image";
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
// import plant from "../../../public/plant.png"
// import pot from "../../../public/pot.png"
// import care from "../../../public/care.png"

export default function Services(){
    const service = [
        {
            id: 1,
            name: "Indoor Plant",
            description: "Add ambiance to your room with indoor plants",
            image: "/plant.png"
        },
        {
            id: 2,
            name: "Outdoor Plant",
            description: "Provide a rich look to your balconies",
            image: "/pot.png"
        },
        {
            id: 3,
            name: "Garden Care",
            description: "We provied you with the best assistance regarding your garden",
            image: "/care.png"
        }
    ]
    return(
        
        <motion.div
        variants={fadeIn('up', 0.2)}
        initial ="hidden"
        whileInView={"show"}
        viewport={{once: true, amount: 0.7}}
        className="p-4 ">
            <h1 className="font-bold text-[30px] text-center">Our Services</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center items-center my-8">
                {service.map((item) => (
                    <div key={item.id} className="flex flex-col justify-center items-center gap-2 cursor-pointer">
                        <div className="bg-[#E9F9E1] w-[100px] h-[100px] rounded-md flex justify-center items-center">
                            <Image src={item.image} alt={item.name} width={40} height={50}/>
                        </div>
                        <h1 className="font-bold text-[16px] leading-3 xl:text-[17px]">{item.name}</h1>
                        <p className="text-[#68737F] text-[12px] leading-5 w-[60%] text-center xl:text-[15px]">{item.description}</p>
                    </div>
))}
                
            </div>
        </motion.div>
    )
}
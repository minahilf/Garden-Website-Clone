'use client'
import Image from "next/image";
import logo from "../../public/logo.png"
import search from "../../public/search.png"
import ham from "../../public/ham.png"
import Link from "next/link";
import { useState } from "react";

export default function Header(){
    const [isOpen, setIsOpen] = useState(false);

    return(
       <nav className="p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Image src={logo} alt="logo" width={160} height={160}/>

            <ul className="hidden sm:flex space-x-6">
            <li className="relative group">
            <Link href="/" className="transition-all duration-300 group-hover:font-bold">
              Home
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#8BB178] transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <Link href="/Services" className="transition-all duration-300 group-hover:font-bold">
              Services
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#8BB178] transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <Link href="Categories" className="transition-all duration-300 group-hover:font-bold">
              Categories
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#8BB178] transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <Link href="/Offer" className="transition-all duration-300 group-hover:font-bold">
              Offers
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#8BB178] transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <Link href="/Upcoming" className="transition-all duration-300 group-hover:font-bold">
              Upcoming
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#8BB178] transition-all duration-300 group-hover:w-full"></span>
          </li>
            </ul>

            <button onClick={()=>setIsOpen(!isOpen)} className="sm:hidden">
                <Image src={ham} alt="ham" width={25} height={25}/>
            </button>
        </div>

        {isOpen && (
            <div className="md:hidden mt-4 space-y-3 p-4 list-none flex flex-col gap-2 shadow-sm" >
                <Link href="/" ><li className="hover:font-bold ">Home</li></Link>
                <Link href="/Services" ><li className="hover:font-bold ">Services</li></Link>
                <Link href="Categories" ><li className="hover:font-bold ">Categories</li></Link>
                <Link href="/Offer" ><li className="hover:font-bold ">Offers</li></Link>
                <Link href="/Upcoming" ><li className="hover:font-bold ">Upcoming</li></Link>
            </div>
        )}
       </nav>
    )
}
import Image from "next/image";
import map from "../../public/map.png";
import icons from "../../public/icons.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-8 bg-white flex flex-col gap-6">
      
      {/* Flex container for ul lists & map on small screens */}
      <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-6">
        
        {/* Left Section: Navigation + Contact */}
        <div className="flex flex-col sm:flex-row sm:gap-[6em] xl:gap-[10em]">
          {/* Navigation Links */}
          <ul className="flex flex-col gap-2">
            <Link href="/"><li className="font-medium text-[16px]">Home</li></Link>
            <Link href="/Categories"><li className="font-medium text-[16px]">About</li></Link>
            <Link href="/Services"><li className="font-medium text-[16px]">Service</li></Link>
            <Link href="/Offer"><li className="font-medium text-[16px]">Contact</li></Link>
          </ul>

          {/* Contact Section */}
          <ul className="flex flex-col gap-2 mt-4 sm:mt-0">
            <li className="font-bold text-[18px]">Contact</li>
            <li className="font-medium text-[16px] sm:w-[50%]">Pokhara, Nepal mail@gardenpokhara.club</li>
            <li className="font-medium text-[16px]">+977-9801048130</li>
          </ul>
        </div>

        {/* Map Image (Now aligned in row on sm screens) */}
        <Image src={map} alt="map" className="sm:self-center sm:w-[250px] sm:h-[150px] lg:w-[350px] lg:h-[200px]" />

      </div>

      {/* Bottom Footer Section */}
      <div className="flex flex-col gap-2 sm:flex-row sm:justify-between ">
        <p className="text-[12px]">Copyright &copy; 2021 GardenPokhara</p>
        <Image src={icons} alt="icons" width={80} height={80} />
        <p className="text-[12px]">Created by Minahil Fatima</p>
      </div>

    </footer>
  );
}

import Link from "next/link";

export default function Offer() {
  return (
    <div
      className="relative p-4 sm:flex sm:justify-evenly sm:p-10 bg-cover bg-center"
      style={{ backgroundImage: "url(/offer.png)" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative sm:flex sm:flex-col sm:gap-2">
        <h1 className="font-bold text-[28px] sm:leading-9 text-white text-center sm:text-left sm:w-[60%]">
          Garden Pokhara welcomes you!!
        </h1>
        <p className="text-[14px] text-white text-center leading-8 sm:leading-6 sm:w-[60%] sm:text-left">
          Receive 10% off on your purchase. Redeem now!
        </p>
      </div>
      <div className="relative flex flex-col justify-center items-center gap-4 mt-2 sm:justify-start sm:items-start">
        <input type="email" className="bg-white text-[#C4C4C4] p-2 lg:p-4 lg:w-[280px] text-[14px]" placeholder="Enter email...." />
        <div className="bg-[#8BB178] w-[120px] h-[40px] flex justify-center items-center gap-2 duration-200 hover:bg-[#5a8147]">
          <Link href="/"><button className="text-white">Claim Now</button></Link>
        </div>
      </div>
    </div>
  );
}

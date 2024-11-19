'use client'; // Add this line
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-gray-700 w-full h-[100px] flex justify-between items-center px-4">
      {/* Box for Image with White Background */}
      <div className="p-4 bg-white rounded-lg">
        <Image
          src="https://www.tcfusa.org/wp-content/uploads/2018/08/TCF-USA-newLogo.png"
          alt="logo"
          width={100}
          height={100}
        />
      </div>

      {/* Navbar Links */}
      <ul className="flex gap-6 text-lg font-semibold text-white">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/WaysTOContribute">Ways To Contribute</Link></li>
        <li><Link href="/MyJourneyWithTCF">My Journey With TCF</Link></li>
        <li><Link href="/zakat">Zakat</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>
      </ul>

      {/* Button */}
      <div>
        <button className="bg-teal-500 px-4 py-2 rounded-lg hover:bg-teal-400 text-white">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Navbar;

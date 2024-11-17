"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo2 from "../../public/logo2.png";
import searchIcon from "../../public/search.png";
import notification from "../../public/notification.png";
import profile from "../../public/profile.png";
import dots from "../../public/dots.png";
import newi from "../../public/new.png";



const Navbar2 = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex items-center justify-between bg-white p-4 border-b border-gray-300">
      {/* Logo */}
      <div className="flex items-center">
        <Image src={logo2} alt="logo2" className="h-7 w-auto" />
      </div>

      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <div className="flex items-center border border-gray-300 rounded-xl px-3 py-1">
          <Image
            src={searchIcon}
            alt="search"
            className="h-7 w-7 text-gray-500"
          />
          <input
            type="text"
            placeholder="Search or type anything here"
            className="ml-2 outline-none bg-transparent text-sm text-gray-700 placeholder-gray-500 w-72"
          />
        </div>

        {/* Navigation Icons */}
        <Image
          src={notification}
          alt="notification"
          className="h-9 w-9 cursor-pointer"
        />
        <Image
          src={profile}
          alt="profile"
          className="h-9 w-9 rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <div>
      <Navbar2 />
      <div className="p-5 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center">
          <h1 className="font-medium text-3xl text-black">
            Peak Align FY 24-25
          </h1>
          <span className="px-2"></span>
          <div className="flex items-center">
            <Image
              src={dots}
              alt="dots"
              className="h-8 w-auto cursor-pointer"
            />
          </div>
        </div>

        {/* Right Section */}
        <Image src={newi} alt="add" className="h-12 w-auto" />
      </div>

      {/* Buttons */}
      <div className="p-5 flex space-x-4">
        <button className="px-6 py-2 border bg-white text-gray-600 rounded-full hover:bg-emerald-300 hover:text-white">
          Individual
        </button>
        <button className="px-6 py-2 border bg-white text-gray-600 rounded-full hover:bg-emerald-300 hover:text-white">
          Team
        </button>
        <button className="px-6 py-2 border bg-white text-gray-600 rounded-full hover:bg-emerald-300 hover:text-white">
          Wide
        </button>
      </div>
      <hr></hr>
      <div className="flex px-7">
        <span className="px-4 py-4 text-gray-600"> OKR</span>
        <span className="px-4 py-4 text-gray-600"> Alignment Visualization</span>
        <span className="px-4 py-4 text-gray-600"> Statistic</span>
        <span className="px-4 py-4 text-gray-600"> Feedback and Comment</span>
      </div>

      <hr></hr>


    
      

    </div>
  );
};

export default Navbar;

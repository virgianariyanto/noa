import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { LuInstagram } from "react-icons/lu";
import { RiTwitterXLine } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";
import { useState } from "react";
import styles from "@/components/css/Header.module.css";

function Header() {
  const [nav, setNav] = useState(false);
  
  return (
    <header className="w-full fixed right-o left-0 top-0">
      {/* Sidebar Section */}
      {nav ? (
        <div className="bg-black/60 fixed z-10 w-full h-screen left-0 bottom-0"></div>
      ) : (
        ""
      )}

      <div className={
          nav
            ? "fixed z-10 w-[300px] left-0 top-0 bottom-0 bg-white dark:bg-black duration-500"
            : "fixed z-10 w-[300px] -left-100 top-0 bottom-0 bg-white dark:bg-black duration-500"
        }>
        <AiOutlineClose onClick={() => setNav(!nav)} size={20} className="top-4 right-4 absolute cursor-pointer text-slate-600" />
        <h2 className={`text-4xl text-[#ff6abc] m-4 mt-8 ${styles.latoblack}`}>
          noa
        </h2>

        <nav>
          <ul className="flex flex-col p-4">
            <li className="flex items-center text-xl py-2 text-slate-200">
              <span className={`text-[15px] tracking-widest cursor-pointer ${styles.latothin}`}>Home</span>
            </li>
            <li className="flex items-center text-xl py-2 text-slate-200">
              <span className={`text-[15px] tracking-widest cursor-pointer ${styles.latothin}`}>Menu</span>
            </li>
            <li className="flex items-center text-xl py-2 text-slate-200">
              <span className={`text-[15px] tracking-widest cursor-pointer ${styles.latothin}`}>Gallery</span>
            </li>
            <li className="flex items-center text-xl py-2 text-slate-200">
              <span className={`text-[15px] tracking-widest cursor-pointer ${styles.latothin}`}>Contact</span>
            </li>
          </ul>
        </nav>
      </div>
      {/* End Sidebar Section */}

      <div className="w-5/6 mx-auto flex justify-between my-4 items-center">
        {/* Menu Icon */}
        <AiOutlineMenu size={30} onClick={() => setNav(!nav)} className="md:hidden cursor-pointer" />
        {/* End Menu Icon */}

        {/* Logo Section */}
        <span className={`text-4xl hidden text-[#ff6abc] md:block ${styles.latoblack}`}>noa</span>
        {/* End Logo Section */}

        {/* Navbar Section */}
        <nav className="">
          <ul className={`hidden md:flex md:items-center ${styles.latolight}`}>
            <li className="mr-4 tracking-widest cursor-pointer">Home</li>
            <li className="mr-4 tracking-widest cursor-pointer">Menu</li>
            <li className="mr-4 tracking-widest cursor-pointer">Gallery</li>
            <li className="tracking-widest cursor-pointer">Contact</li>
          </ul>
        </nav>
        {/* End Navbar Section */}

        {/* Sosmed Section */}
        <div>
          <ul className="hidden md:flex md:items-cdenter">
            <li className="mr-4"><LuInstagram /></li>
            <li className="mr-4"><RiTwitterXLine /></li>
            <li className=""><FaTiktok /></li>
          </ul>
        </div>
        {/* End Sosmed Section */}

        <span className={`text-4xl text-[#ff6abc] md:hidden ${styles.latoblack}`}>noa</span>
      </div>
    </header>
  );
}

export default Header;
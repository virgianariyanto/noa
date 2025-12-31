import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { LuInstagram } from "react-icons/lu";
import { RiTwitterXLine } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";
import { useState, useEffect } from "react";
import styles from "@/components/css/Style.module.css";

function Header() {
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ===== Overlay ===== */}
      {nav && (
        <div
          onClick={() => setNav(false)}
          className="fixed inset-0 bg-pink-500/50 z-40"
        />
      )}

      {/* ===== Sidebar ===== */}
      <aside
        className={`fixed top-0 left-0 h-full w-[300px] bg-white dark:bg-black z-50
        transform duration-300 ease-in-out
        ${nav ? "translate-x-0" : "-translate-x-full"}`}
      >
        <AiOutlineClose
          size={20}
          onClick={() => setNav(false)}
          className="absolute top-4 right-4 cursor-pointer text-[#ff6abc]"
        />

        <h2 className={`text-4xl text-[#ff6abc] m-4 mt-8 ${styles.latoblack}`}>
          noa
        </h2>

        <nav>
          <ul className="flex flex-col p-4">
            {["Home", "Menu", "Gallery", "Contact"].map((item) => (
              <li
                key={item}
                className="py-3 text-black dark:text-slate-200"
              >
                <span
                  className={`text-[15px] tracking-widest cursor-pointer ${styles.latothin}`}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* ===== Header ===== */}
      <header
        className={`fixed top-0 left-0 w-full z-30 transition-all duration-300
        ${isScrolled ? "bg-black/60 backdrop-blur-sm" : "bg-transparent"}`}
      >
        <div className="w-5/6 mx-auto flex justify-between items-center py-4">
          {/* Mobile Menu */}
          <AiOutlineMenu
            size={30}
            onClick={() => setNav(true)}
            className="md:hidden cursor-pointer text-white"
          />

          {/* Logo Desktop */}
          <div className="hidden md:flex">
            <span
              className={`text-5xl ${styles.latoblack}
              ${isScrolled ? "text-[#ff6abc]" : "text-[#ff6abc]"}`}
            >
              noa
            </span>
          </div>

          {/* Desktop Nav */}
          <nav>
            <ul className={`hidden md:flex items-center ${styles.latobold}`}>
              <li className={`mr-4 tracking-widest cursor-pointer ${isScrolled ? "text-[#ff6abc]" : "text-[#ff6abc]"}`}>
                Home
              </li>
              <li className="mr-4 tracking-widest text-white cursor-pointer">
                Universe
              </li>
              <li className="mr-4 tracking-widest text-white cursor-pointer">
                Story
              </li>
              <li className="tracking-widest text-white cursor-pointer">
                Contact
              </li>
            </ul>
          </nav>

          {/* Social Media */}
          <ul className="hidden md:flex items-center text-white">
            <li className="mr-4 cursor-pointer">
              <LuInstagram />
            </li>
            <li className="mr-4 cursor-pointer">
              <RiTwitterXLine />
            </li>
            <li className="cursor-pointer">
              <FaTiktok />
            </li>
          </ul>

          {/* Mobile Logo */}
          <span
            className={`text-4xl md:hidden ${styles.latoblack}
            ${isScrolled ? "text-[#ff6abc]" : "text-[#ff6abc]"}`}
          >
            noa
          </span>
        </div>
      </header>
    </>
  );
}

export default Header;

import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <header className="padding-x py-8 z-20 w-full absolute max-lg:fixed left-0 top-0 max-lg:bg-white">
      <nav className="flex justify-between items-center max-container max-w-screen-xl m-auto">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className=" font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red duration-200 transition-all"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile navMenu */}
        <img
          src={hamburger}
          alt="Hamburger"
          width={25}
          height={25}
          onClick={handleNav}
          className="hidden max-lg:block z-20 cursor-pointer"
        />
        <div
          className={`lg:hidden absolute top-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300 font-catamaran
            ${nav ? "left-0" : "left-[100%]"}`}
        >
          <ul>
            {navLinks.map((item) => (
              <li key={item.label} className="p-4 m-4" onClick={handleNav}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-2xl text-slate-gray "
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

import { useState } from "react";
import Button from "./Button";
import { settings } from "../lib/images";
import Icon from "./Icon";

function Navbar() {
  const [menu, handleMenu] = useState(false);

  const closeNav = function (e) {
    const list = e.target.closest("a");
    if (list) handleMenu(false);
  };

  return (
    <nav className="border-white z-10 fixed w-full bg-black">
      {/* Hamburger backdrop */}
      <div
        className={`h-screen w-screen bg-black/5 absolute left-0 top-0 ${!menu && "hidden"} `}
        onClick={() => handleMenu(false)}
      />

      <div className="h-6 bg-header-line"></div>

      {/* Nav */}
      <div className="container flex flex-wrap justify-between items-center gap-8 relative px-8 py-4">
        {/* Logo */}
        <a className="logo font-bold text-2xl text-white">
          <img src={settings} alt="" className="h-10" />
        </a>

        {/* Ham Menu */}
        <p className="sm:hidden ml-auto text-white cursor-pointer">
          <Icon
            icon={menu ? "clear" : "menu"}
            size={20}
            className="ml-auto text-white cursor-pointer sm:hidden duration-300 hover:text-[rgb(164,110,219)]"
            onclick={() => handleMenu(!menu)}
          />
        </p>

        <div
          className={`max-sm:absolute top-full left-[50%] max-sm:translate-x-[-50%] max-sm:w-[calc(100vw-4rem)] max-sm:flex-[100%] p-0 rounded-lg text-center font-normal   max-sm:backdrop-blur-[10px] max-sm:border-2 max-sm:border-white/10 max-sm:scale-0 ease-in max-sm:mt-1
          grid transition-[grid-template-rows,padding,scale] duration-300 grid-rows-[0fr] ${menu && "grid-rows-[1fr] p-4 max-sm:scale-100"}
          sm:grid-rows-1`}
        >
          <div
            className="flex max-sm:flex-col gap-2 max-sm:overflow-hidden 
           sm:items-center sm:ml-auto sm:gap-8"
            onClick={(e) => closeNav(e)}
          >
            <ul
              className={`flex flex-col text-black text-sm transition-all 
              sm:flex-row sm:gap-8 sm:flex sm:px-0 sm:py-0 sm:opacity-100 sm:text-white`}
            >
              {["Home", "Features", "Pricing"].map((link) => {
                return (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className={`hover:bg-white/10 py-3 rounded-xl transition-[opacity,background] duration-300 block 
                  hover:sm:opacity-80 sm:py-0 text-white `}
                  >
                    {link}
                  </a>
                );
              })}
            </ul>

            <Button
              as="a"
              href="https://github.com/aykutkardas/react-icomoon"
              variant="primary"
              size="sm"
              hover
              className="button block max-sm:mt-4 max-sm:rounded-xl "
            >
              Get for free
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

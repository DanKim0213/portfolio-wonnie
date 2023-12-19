import { useState } from "react";
import { navLinks } from "../constants";
import useStickyHeader from "../hooks/useStickyHeader";
import { IoMdClose } from "react-icons/io";
import { BiMenu, BiCheckDouble, BiLogoGithub } from "react-icons/bi";

const Header = () => {
  const { stickyStyle } = useStickyHeader();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <header className={stickyStyle}>
      <nav className="flex flex-col items-start justify-between max-lg:gap-8 lg:flex-row lg:items-center ">
        <a
          href="/"
          className="flex items-center gap-4 text-lg font-bold text-coral-red"
        >
          <BiCheckDouble size={50} />
          WONNIE
        </a>
        <ul
          className={`${
            !isOpen && "hidden"
          } items-center justify-center gap-14 lg:flex `}
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat text-lg text-slate-gray hover:text-coral-red"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div
          className={`${
            !isOpen && "hidden"
          } gap-2 font-montserrat text-lg font-medium lg:flex`}
        >
          <a
            href="https://github.com/dankim0213"
            className="hover:text-coral-red"
            target="_blank"
            rel="noreferrer"
          >
            <BiLogoGithub size={40} />
          </a>
        </div>
        <button
          onClick={isOpen ? handleClose : handleOpen}
          className="absolute right-8 top-5 hover:text-coral-red lg:hidden"
        >
          {isOpen ? <IoMdClose size={40} /> : <BiMenu size={40} />}
        </button>
      </nav>
    </header>
  );
};

export default Header;

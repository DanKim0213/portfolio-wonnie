import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import useStickyHeader from "../hooks/useStickyHeader";
import { BiCheckDouble } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";

const Header = () => {
  const { stickyStyle } = useStickyHeader();

  return (
    <header className={stickyStyle}>
      <nav className="flex items-center justify-between">
        <a href="/" className="flex gap-4 items-center text-coral-red font-bold text-lg">
          <BiCheckDouble size={50}  />
          WONNIE
        </a>
        <ul className="hidden items-center justify-center gap-14 lg:flex">
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
        <div className="hidden gap-2 font-montserrat text-lg font-medium lg:flex">
          <a href="https://github.com/dankim0213" className="hover:text-coral-red"><BiLogoGithub size={40} /></a>
        </div>
        <div className="block lg:hidden">
          <img
            src={hamburger}
            alt="hamburger icon"
            className="h-[25px] w-[25px]"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;

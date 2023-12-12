import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import useStickyHeader from "../hooks/useStickyHeader";

const Header = () => {
  const { stickyStyle } = useStickyHeader();

  return (
    <header className={stickyStyle}>
      <nav className="flex items-center justify-between">
        <a href="/">
          <img src={headerLogo} alt="logo" className="h-[29px] w-[129px]" />
        </a>
        <ul className="hidden flex-1 items-center justify-center gap-16 lg:flex">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden gap-2 font-montserrat text-lg font-medium lg:flex">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
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

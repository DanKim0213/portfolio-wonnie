import { useEffect, useState } from "react";

const useStickyHeader = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const stickyStyle = `fixed z-20 top-0 transition-transform duration-300 ${
    isScrollingUp ? "transform-translate-y-0" : "-translate-y-full"
  } `;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // when the current scroll position is less than 30 (header height), show the header
      setIsScrollingUp(
        currentScrollPos <= 30 || prevScrollPos > currentScrollPos,
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return {
    stickyStyle,
    isScrollingUp,
  };
};

export default useStickyHeader;

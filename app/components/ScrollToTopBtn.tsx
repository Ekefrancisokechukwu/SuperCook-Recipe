"use client";

import { Button } from "@nextui-org/react";
import { RiArrowUpLine } from "react-icons/ri";
import { useState, useEffect } from "react";

const ScrollToTopBtn = () => {
  const [isInview, setIsInview] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 3000) {
        setIsInview(true);
      } else {
        setIsInview(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div
      className={`fixed transition-all duration-300 right-3 bottom-5  ${
        isInview ? "translate-y-0 opacity-100" : "translate-y-64 opacity-0"
      }`}
    >
      <Button
        isIconOnly
        className="w-[2.5rem] bg-red-700 text-white rounded-full h-[2.5rem] animate-bounce"
        onClick={() => scrollTo(0, 10)}
      >
        <RiArrowUpLine />
      </Button>
    </div>
  );
};
export default ScrollToTopBtn;

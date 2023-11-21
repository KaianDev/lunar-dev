"use client";

import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import NavItem from "./NavItem";

const Header = () => {
  const [scroll, setScroll] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollTop = document.documentElement.scrollTop;
      setScroll(scrollTop);
    });
  }, [scroll]);
  return (
    <header className="fixed left-0 right-0 top-0 mx-auto">
      <div
        className={`bg-luna-header container flex items-center px-3 py-2 duration-200 ease-in md:justify-between md:px-4 md:py-3 ${
          scroll === 0 ? "md:bg-transparent" : "md:bg-black"
        }`}
      >
        <div className=" flex items-center justify-center md:hidden">
          <MobileMenu />
        </div>
        <Image
          src="/assets/logo.png"
          alt="Logo LunaDev"
          sizes="100vw"
          width={0}
          height={0}
          className="hidden h-16 w-auto md:block"
        />
        <ul className="hidden gap-4 md:flex">
          <NavItem label="Início" />
          <NavItem label="Sobre" />
          <NavItem label="Serviço" />
          <NavItem label="Contato" />
        </ul>
        <div className="hidden gap-4 md:flex">
          <NavItem label="Área do Cliente" variant="bg-luna-button" />
        </div>
      </div>
    </header>
  );
};

export default Header;

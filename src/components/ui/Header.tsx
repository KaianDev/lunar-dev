"use client";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import NavItem from "./NavItem";
import Link from "next/link";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <header
      data-aos="fade-down"
      data-aos-delay="100"
      data-aos-duration="400"
      data-aos-easing="linear"
      className="sticky top-0
      z-20 mx-auto w-full bg-luna-dark shadow-md md:bg-white/5 md:backdrop-blur-lg"
    >
      <div
        className={`container flex items-center px-3 py-2 duration-200 ease-in md:justify-between md:px-4 md:py-3 `}
      >
        <div className=" flex items-center justify-center md:hidden">
          <MobileMenu />
        </div>
        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt="Logo LunaDev"
            sizes="100vw"
            width={0}
            height={0}
            className="hidden h-16 w-auto md:block"
          />
        </Link>
        <nav className="hidden gap-4 md:flex">
          <NavItem href="/">Início</NavItem>
          <NavItem href="#about">Sobre</NavItem>
          <NavItem href="#services">Serviços</NavItem>
          <NavItem target="_blank" href="https://discord.com/invite/Q6mY9Qn2xY">
            Contato
          </NavItem>
        </nav>
        <div className="hidden gap-4 md:flex">
          <NavItem className="bg-luna-button/60 hover:bg-luna-button">
            Área do Cliente
          </NavItem>
        </div>
      </div>
    </header>
  );
};

export default Header;

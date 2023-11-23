import MobileMenu from "./MobileMenu";
import Image from "next/image";
import NavItem from "./NavItem";
import Link from "next/link";

const Header = () => {
  return (
    <header
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
        <ul className="hidden gap-4 md:flex">
          <NavItem label="Início" href="/" />
          <NavItem label="Sobre" href="#about" />
          <NavItem label="Serviço" href="#services" />
          <NavItem label="Contato" />
        </ul>
        <div className="hidden gap-4 md:flex">
          <NavItem
            label="Área do Cliente"
            variant="bg-luna-button"
            href="https://discord.com/invite/Q6mY9Qn2xY"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

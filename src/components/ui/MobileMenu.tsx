import { MenuIcon } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./sheet";
import MobileMenuItem from "./MobileMenuItem";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon size={40} className="text-white" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex flex-col gap-2 bg-black/90 py-10 text-white"
      >
        <MobileMenuItem href="/">Início</MobileMenuItem>
        <MobileMenuItem href="#about">Sobre</MobileMenuItem>
        <MobileMenuItem href="#services">Serviços</MobileMenuItem>
        <MobileMenuItem
          target="_blank"
          href="https://discord.com/invite/Q6mY9Qn2xY"
        >
          Contato
        </MobileMenuItem>
        <MobileMenuItem
          className="bg-luna-button/60 hover:bg-luna-button"
          href="#"
        >
          Área do Cliente
        </MobileMenuItem>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;

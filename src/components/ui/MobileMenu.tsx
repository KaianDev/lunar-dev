import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";

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
        <a href="/" className="p-2 text-2xl duration-200 hover:bg-luna-header">
          Início
        </a>
        <a href="/" className="p-2 text-2xl duration-200 hover:bg-luna-header">
          Sobre
        </a>
        <a href="/" className="p-2 text-2xl duration-200 hover:bg-luna-header">
          Serviço
        </a>
        <a href="/" className="p-2 text-2xl duration-200 hover:bg-luna-header">
          Contato
        </a>
        <a href="/" className="p-2 text-2xl duration-200  hover:bg-luna-header">
          Área do Cliente
        </a>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;

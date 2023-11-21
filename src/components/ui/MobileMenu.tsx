import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";

const MobileMenu = () => {
  return (
    <Sheet >
      <SheetTrigger>
        <MenuIcon size={40} className="text-white" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex flex-col gap-2 bg-black/90 py-10 text-white"
      >
        <a href="/">
          <div className="p-2 text-2xl duration-200 hover:bg-dark">Início</div>
        </a>
        <a href="/">
          <div className="p-2 text-2xl duration-200 hover:bg-dark">Sobre</div>
        </a>
        <a href="/">
          <div className="p-2 text-2xl duration-200 hover:bg-dark">
            Serviços
          </div>
        </a>
        <a href="/">
          <div className="p-2 text-2xl duration-200 hover:bg-dark">Contato</div>
        </a>
        <a href="/">
          <div className="p-2 text-2xl duration-200 hover:bg-dark">
            Área do Cliente
          </div>
        </a>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;

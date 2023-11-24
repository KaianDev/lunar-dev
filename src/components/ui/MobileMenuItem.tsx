import { ComponentProps } from "react";
import { SheetClose } from "./sheet";
import { cn } from "@/lib/utils";

const MobileMenuItem = ({
  children,
  className,
  ...props
}: ComponentProps<"a">) => {
  return (
    <SheetClose>
      <a
        className={cn(
          "block w-full p-2 text-start text-2xl duration-200 hover:bg-luna-dark",
          className,
        )}
        {...props}
      >
        {children}
      </a>
    </SheetClose>
  );
};

export default MobileMenuItem;

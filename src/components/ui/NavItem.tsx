import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

const NavItem = ({ children, className, ...props }: ComponentProps<"a">) => {
  return (
    <a
      className={cn(
        "cursor-pointer rounded bg-luna-link/60 px-3 py-2 text-xl text-white shadow-sm duration-200 hover:bg-luna-link",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
};

export default NavItem;

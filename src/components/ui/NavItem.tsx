interface NavItemProps {
  label: string;
  variant?: string;
  href?: string;
}
const NavItem = ({ label, variant, href }: NavItemProps) => {
  return (
    <li>
      <a
        href={href}
        target={`${variant ? "_blank" : ""}`}
        className={`${
          variant ? variant : "bg-luna-link/50"
        } cursor-pointer rounded px-3 py-2 text-xl text-white shadow-sm duration-200 hover:bg-luna-link`}
      >
        {label}
      </a>
    </li>
  );
};

export default NavItem;

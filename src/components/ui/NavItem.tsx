interface NavItemProps {
  label: string;
  variant?: string;
}
const NavItem = ({ label, variant }: NavItemProps) => {
  return (
    <li>
      <a
        href=""
        className={`${
          variant ? variant : "bg-luna-link/50"
        } hover:bg-luna-link cursor-pointer rounded px-3 py-2 text-xl text-white duration-200`}
      >
        {label}
      </a>
    </li>
  );
};

export default NavItem;

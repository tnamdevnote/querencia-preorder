import Avatar from "./Avatar";
import CartIcon from "./CartIcon";
import LogoIcon from "./LogoIcon";
import MenuIcon from "./MenuIcon";
import SearchIcon from "./SearchIcon";

function Icon({ className, name }: { className?: string; name: string }) {
  switch (name) {
    case "Avatar":
      return <Avatar className={className} />;
    case "Cart":
      return <CartIcon className={className} />;
    case "Logo":
      return <LogoIcon className={className} />;
    case "Menu":
      return <MenuIcon className={className} />;
    case "Search":
      return <SearchIcon className={className} />;
    default:
      return <SearchIcon />;
  }
}

export default Icon;

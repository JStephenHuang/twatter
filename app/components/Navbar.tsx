import Link from "next/link";
import SignOutBtn from "./SignOutBtn";

const NavLinks = ({ label, link }: { label: string; link: string }) => {
  return (
    <li className="mx-6">
      <Link href={link}>{label}</Link>
    </li>
  );
};

const Navbar = () => {
  return (
    <nav className="h-[6%] flex items-center justify-between px-6 border-b">
      <ul className="flex">
        <NavLinks label="Home" link="/" />
        <NavLinks label="Twats" link="/twats" />
      </ul>
      <SignOutBtn />
    </nav>
  );
};

export default Navbar;

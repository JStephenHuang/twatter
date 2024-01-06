import Link from "next/link";
import React from "react";

const NavLinks = ({ label, link }: { label: string; link: string }) => {
  return (
    <li className="mx-2">
      <Link href={link}>{label}</Link>
    </li>
  );
};

const Navbar = () => {
  return (
    <nav className="p-6 border-b">
      <ul className="flex">
        <NavLinks label="Home" link="/" />
        <NavLinks label="Twats" link="/twats" />

        <NavLinks label="Login" link="/login" />
      </ul>
    </nav>
  );
};

export default Navbar;

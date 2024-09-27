"use client";

import NavLink, { NavLinkProp } from "./NavLink";

export default function NavBar() {
  const links: NavLinkProp[] = [
    {
      title: "Home",
      icon: "",
      href: "/",
    },
    {
      title: "Porfolio",
      icon: "",
      href: "/portfolio",
    },
    {
      title: "About Me",
      icon: "",
      href: "/about",
    },
    {
      title: "Contacts",
      icon: "",
      href: "/contacts",
    },
  ];
  return (
    <div className="flex justify-center gap-3 neo-morph-dark">
      {links.map((link, idx) => (
        <NavLink key={idx} link={link} />
      ))}
    </div>
  );
}

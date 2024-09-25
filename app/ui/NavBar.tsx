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
      title: "Projects",
      icon: "",
      href: "/projects",
    },
    {
      title: "Skills",
      icon: "",
      href: "/skills",
    },
    {
      title: "Contacts",
      icon: "",
      href: "/contacts",
    },
  ];
  return (
    <div className="flex justify-center gap-3">
      {links.map((link, idx) => (
        <NavLink key={idx} link={link} />
      ))}
    </div>
  );
}

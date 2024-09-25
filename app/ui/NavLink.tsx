import Link from "next/link";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";

export interface NavLinkProp {
  title: string;
  icon: string;
  href: string;
}

export default function NavLink({ link }: { link: NavLinkProp }) {
  const pathname = usePathname();

  const { title, icon, href } = link;

  return (
    <Link
      key={link.title}
      href={link.href}
      className={clsx(
        "flex h-[48px] grow items-end justify-center gap-2 bg-black p-3 text-sm font-medium hover:text-sky-300 md:flex-none md:justify-start md:p-2 md:px-3",
        {
          "border border-black border-b-sky-300": pathname === link.href,
        }
      )}
    >
      <p>{link.title}</p>
    </Link>
  );
}

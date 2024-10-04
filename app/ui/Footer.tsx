"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  return (
    <div className="flex justify-center gap-3 neo-morph-dark py-10">
      <div>Abel Getiso, 2024.</div>
    </div>
  );
}

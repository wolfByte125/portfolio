import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./ui/NavBar";
import { inter, montserrat } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "Abel M. Getiso",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased bg-[url(../public/imgs/blob.svg)] bg-no-repeat bg-fixed bg-cover min-h-screen text-white`}
      >
        <div>
          <NavBar />
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}

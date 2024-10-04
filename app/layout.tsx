import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./ui/NavBar";
import { inter, montserrat } from "@/app/ui/fonts";
import Footer from "./ui/Footer";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased bg-[url(../public/imgs/blob3.svg)] bg-no-repeat bg-fixed bg-cover min-h-screen text-white`}
      >
        <div>
          <NavBar />
        </div>
        <div>{children}</div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

import Image from "next/image";
import NavBar from "./ui/NavBar";
import Introduction from "./ui/Introduction";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center`}>
      <Introduction />
    </main>
  );
}

import ContactCard, { ContactCardProp } from "./ContactCard";
import Image from "next/image";

export default function ListSocials() {
  const socials: ContactCardProp[] = [
    {
      alt: "LinkedIn",
      logo: "/public/linkedin_logo.png",
      link: "https://www.linkedin.com/in/abelgetiso",
      label: "",
    },
    {
      alt: "GitHub",
      logo: "/public/github_logo.png",
      link: "https://github.com/wolfByte125",
      label: "",
    },
    {
      alt: "Instagram",
      logo: "/public/instagram_logo.png",
      link: "https://instagram.com",
      label: "",
    },
  ];
  return (
    <div className="neo-morph-dark w-2/3 text-center rounded-3xl py-6">
      <p className="page-title">Socials</p>
      <div>
        {socials.map((social, idx) => (
          <ContactCard key={idx} contactContent={social} />
        ))}
      </div>
    </div>
  );
}

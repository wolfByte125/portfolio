import Link from "next/link";
import Image from "next/image";
interface ContactContent {
  alt: string;
  icon: string;
  link: string;
  label: string;
}
interface SocialContent {
  alt: string;
  logo: string;
  link: string;
  label: string;
}
export default function Contacts() {
  const socials: SocialContent[] = [
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

  const contacts: ContactContent[] = [
    {
      alt: "Email",
      icon: "",
      link: "",
      label: "abelgetiso@gmail.com",
    },
    {
      alt: "Phone",
      icon: "",
      link: "",
      label: "+251923162082",
    },
    {
      alt: "Address",
      icon: "",
      link: "",
      label: "Addis Ababa, Ethiopia",
    },
  ];
  return (
    <div className="min-w-full min-h-screen flex justify-center items-center pt-10">
      <div className="flex w-4/5 neo-morph-dark rounded-3xl">
        {/* CONTACTS */}
        <div className="w-1/2 text-center rounded-3xl py-6">
          <p className="page-title">Contacts</p>
          <div>
            {contacts.map((contact, idx) => (
              <div key={idx} className="my-6 text-center w-fit mx-auto">
                {contact.icon != "" && (
                  <Image
                    src={contact.icon}
                    alt={contact.alt}
                    width={64}
                    height={64}
                  />
                )}
                <p>{contact.alt}</p>
                <p className="font-semibold">{contact.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SOCIALS */}
        <div className="w-1/2 text-center rounded-3xl py-6">
          <p className="page-title">Socials</p>
          <div>
            {socials.map((social, idx) => (
              <div key={idx} className="my-6 text-center w-fit mx-auto">
                <Link href={social.link} key={idx}>
                  {social.logo != "" && (
                    <Image
                      src={social.logo}
                      alt={social.alt}
                      width={64}
                      height={64}
                    />
                  )}
                  {/* <p>{social.alt}</p>
                    <p>{social.label}</p> */}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

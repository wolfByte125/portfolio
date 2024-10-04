import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
interface ContactContent {
  alt: string;
  icon: React.ReactNode;
  label: string;
}
interface SocialContent {
  alt: string;
  logo: React.ReactNode;
  link: string;
  label: string;
}
export default function Contacts() {
  const socials: SocialContent[] = [
    {
      alt: "LinkedIn",
      logo: <FaLinkedin size="32px" />,
      link: "https://www.linkedin.com/in/abelgetiso",
      label: "",
    },
    {
      alt: "GitHub",
      logo: <FaGithub size="32px" />,
      link: "https://github.com/wolfByte125",
      label: "",
    },
    {
      alt: "Instagram",
      logo: <FaInstagram size="32px" />,
      link: "https://instagram.com",
      label: "",
    },
  ];

  const contacts: ContactContent[] = [
    {
      alt: "Email",
      icon: <SiGmail size="20px" />,
      label: "abelgetiso@gmail.com",
    },
    {
      alt: "Phone",
      icon: <FaPhone size="20px" />,
      label: "+251 923 16 20 82",
    },
    {
      alt: "Address",
      icon: <FaLocationDot size="20px" />,
      label: "Addis Ababa, Ethiopia",
    },
  ];
  return (
    <div className="min-w-full min-h-screen flex justify-center items-center flex-wrap pt-10">
      <div className="flex w-4/5 neo-morph-dark-faded border border-opacity-10 border-custom-bg-secondary rounded-3xl">
        <div className="w-2/3">
          {/* CONTACTS */}
          <p className="page-title">Contacts</p>
          <div>
            <div className="flex flex-wrap gap-3">
              {contacts.map((contact, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 my-3 w-fit mx-auto"
                >
                  {contact.icon != "" && (
                    <div className="flex justify-center my-2">
                      {contact.icon}
                    </div>
                  )}
                  <p>{contact.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-1/3">
          {/* SOCIALS */}
          <p className="page-title">Socials</p>
          <div>
            <div className="flex justify-center gap-5">
              {socials.map((social, idx) => (
                <div key={idx}>
                  <Link href={social.link} key={idx}>
                    {social.logo != "" && <div className="">{social.logo}</div>}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-4/5 neo-morph-dark text-center rounded-3xl py-6 my-6 border border-opacity-10 border-custom-bg-secondary">
        <div className="w-3/5">
          <p className="page-title">Get in touch</p>
          <div className="flex justify-center w-full">
            <form action="" className="flex flex-col items-center w-4/5 gap-3">
              <input
                type="text"
                className="input input-bordered w-full text-md"
                placeholder="Name"
              />
              <input
                type="email"
                className="input input-bordered w-full"
                placeholder="Email"
              />
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Message Title"
              />
              <textarea
                className="textarea textarea-bordered w-full text-md"
                placeholder="Message"
                rows={4}
              ></textarea>
              <input
                type="submit"
                className="btn btn-primary w-full"
                value="Send"
              />
            </form>
          </div>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="flex justify-center items-center w-1/3">
          <div>
            Do you have any projects that you&apos;re working on? Hit me up
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export interface ContactCardProp {
  alt: string;
  logo: string;
  link: string;
  label: string;
}

export default function ContactCard({
  contactContent,
}: {
  contactContent: ContactCardProp;
}) {
  const { alt, logo, link, label } = contactContent;

  return (
    <div className="my-10">
      {link != "" ? (
        <div className="flex justify-center">
          <Link href={link}>
            {/* {logo != "" && (
              <Image
                src={logo}
                alt={alt}
                width={50}
                height={50}
              />
            )} */}
            <p>{alt}</p>
            <p>{label}</p>
          </Link>
        </div>
      ) : (
        <div className="flex justify-center">
          <div>
            {logo != "" && (
              // <Image src={logo} alt={alt} width={64} height={64} />
              <Image
                src="/public/instagram_logo.png"
                alt={alt}
                width={64}
                height={64}
              />
            )}
            <p>{alt}</p>
            <p>{label}</p>
          </div>
        </div>
      )}
    </div>
  );
}

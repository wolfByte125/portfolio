import ContactCard, { ContactCardProp } from "./ContactCard";

export default function ListContacts() {
  const contacts: ContactCardProp[] = [
    {
      alt: "Address",
      logo: "",
      link: "",
      label: "Addis Ababa, Ethiopia",
    },
    {
      alt: "Email",
      logo: "",
      link: "",
      label: "abelgetiso@gmail.com",
    },
    {
      alt: "Phone",
      logo: "",
      link: "",
      label: "+251923162082",
    },
  ];
  return (
    <div className="neo-morph-dark w-2/3 text-center rounded-3xl py-6">
      <p className="page-title">Contacts</p>
      <div>
        {contacts.map((contact, idx) => (
          <ContactCard key={idx} contactContent={contact} />
        ))}
      </div>
    </div>
  );
}

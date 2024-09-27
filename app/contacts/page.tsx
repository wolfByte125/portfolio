import ListContacts from "./ui/ListContacts";
import ListSocials from "./ui/ListSocials";

export default function Contacts() {
  return (
    <div className="min-w-full min-h-screen flex items-center">
      <div className="flex w-full">
        <div className="w-1/2 h-fit flex justify-center">
          <ListContacts />
        </div>
        <div className="w-1/2 h-fit flex justify-center">
          <ListSocials />
        </div>
      </div>
    </div>
  );
}

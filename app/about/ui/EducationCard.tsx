export interface EducationContent {
  icon: React.ReactNode;
  field_of_study: string;
  institution: string;
  start_date: string;
  end_date: string;
}
export default function EducationCard({ edu }: { edu: EducationContent }) {
  const { icon, field_of_study, institution, start_date, end_date } = edu;
  return (
    // <div className="flex sm:w-4/5 md:w-2/5 m-2 shadow-3xl shadow-inner shadow-circle-red   p-2 rounded-md">
    <div className="flex sm:w-4/5 md:w-2/5 m-2 neo-morph-light p-2 rounded-md">
      <div className="flex items-center justify-center w-1/5">{icon}</div>
      <div>
        <p className="my-2">{field_of_study}</p>
        <p className="my-2">{institution}</p>
        <p className="my-2">
          {start_date} - {end_date}
        </p>
      </div>
    </div>
  );
}

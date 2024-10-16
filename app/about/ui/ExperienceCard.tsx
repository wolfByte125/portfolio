import React from "react";

export interface ExperienceContent {
  company: string;
  icon: React.ReactNode;
  company_website: string;
  role: string;
  location: string;
  start_date: string;
  end_date: string;
}

export default function ExperienceCard({ xp }: { xp: ExperienceContent }) {
  const {
    company,
    icon,
    company_website,
    role,
    location,
    start_date,
    end_date,
  } = xp;
  return (
    <div className="flex sm:w-4/5 md:w-2/5 m-2 neo-morph-light p-2 rounded-md">
      <div className="flex items-center justify-center w-1/5">{icon}</div>
      <div>
        <p className="my-2">
          {start_date} - {end_date}
        </p>
        <p className="my-2">{role}</p>
        <p className="my-2">
          {company} | {location}
        </p>
      </div>
    </div>
  );
}

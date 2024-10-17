import React from "react";

export interface AchievementContent {
  title: string;
  icon: React.ReactNode;
  institution: string;
  type: string;
  take_away: string;
  location: string;
  start_date: string;
  end_date: string;
}

export default function AchievementCard({
  achievement,
}: {
  achievement: AchievementContent;
}) {
  const {
    title,
    icon,
    institution,
    type,
    take_away,
    location,
    start_date,
    end_date,
  } = achievement;
  return (
    <div className="xs:w-3/5 md:w-1/5 m-2 neo-morph-light p-5 rounded-md">
      <div className="flex items-center justify-center w-full">{icon}</div>
      <div className="flex">
        <div className="w-full">
          <p className="my-2 font-bold">{title}</p>
          <p className="my-2">{institution}</p>
          <p className="my-2">
            {start_date} - {end_date}
          </p>
          <p className="my-2">{take_away}</p>
          <p className="my-2">{location}</p>
        </div>
      </div>
    </div>
  );
}

import ExperienceCard, { ExperienceContent } from "./ui/ExperienceCard";

export interface AchievementContent {
  title: string;
  type: string;
  take_away: string;
  start_date: string;
  end_date: string;
}

export default function page() {
  const experiences: ExperienceContent[] = [
    {
      company: "Meselal Technologies",
      company_website: "https://meselaltech.com/",
      role: "Backend Developer and Team Leader",
      location: "Addis Ababa, Ethiopia",
      start_date: "Aug. 2022",
      end_date: "Current",
    },
  ];

  return (
    <div className="min-h-screen text-center neo-morph-dark pt-10">
      <div>
        <p className="page-title">Bio</p>
      </div>
      <div>
        <p className="page-title">Experience</p>
        <div className="flex flex-wrap justify-around text-left">
          {experiences.map((xp, idx) => (
            <ExperienceCard key={idx} xp={xp} />
          ))}
        </div>
      </div>
      <div>
        <p className="page-title">Acheivements</p>
      </div>
    </div>
  );
}

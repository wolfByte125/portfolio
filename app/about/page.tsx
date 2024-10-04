import { HiOutlineOfficeBuilding } from "react-icons/hi";
import ExperienceCard, { ExperienceContent } from "./ui/ExperienceCard";
import Separator from "../ui/Separator";
import EducationCard, { EducationContent } from "./ui/EducationCard";
import { FaGraduationCap } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";

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
      icon: <HiOutlineOfficeBuilding size="48px" />,
      company_website: "https://meselaltech.com/",
      role: "Backend Developer and Team Leader",
      location: "Addis Ababa, Ethiopia",
      start_date: "Aug. 2022",
      end_date: "Oct. 2023",
    },
  ];

  const educations: EducationContent[] = [
    {
      icon: <FaGraduationCap size="48px" />,
      field_of_study: "Computer Science, B.Sc.",
      institution: "Unity University, Addis Ababa",
      start_date: "Oct. 2018",
      end_date: "Sept. 2022",
    },
    {
      icon: <GrCertificate size="48px" />,
      field_of_study: "Learning Experience Design",
      institution: "LXD",
      start_date: "Aug. 2022",
      end_date: "Oct. 2022",
    },
  ];

  return (
    <div className="min-h-screen text-center neo-morph-dark-faded">
      <div className="neo-morph-dark pt-10 pb-10">
        <p className="page-title">Professional Background</p>
        <div className="flex flex-col items-center">
          <p className="w-2/3 font-medium">
            I&apos;m a versatile web developer with over 2 years of experience
            in crafting innovative web applications. My expertise spans various
            domains, including but not limited to ERP systems, where I&apos;ve
            honed my skills in ASP .NET Core, ReactJS and more.
            <p className="my-5"></p>
            As a team leader, I&apos;ve successfully managed projects, ensuring
            efficient workflows and meeting project deadlines. I&apos;ve also
            played a crucial role in on-boarding new team members, providing
            them with the necessary training and support. I&apos;m passionate
            about fostering a collaborative work environment and mentoring team
            members. My ability to design and implement coding standards has
            streamlined development processes and improved code quality.
            <p className="my-5"></p>
            I&apos;m driven by a desire to continuously learn and grow as a
            developer. I&apos;m excited to leverage my skills and experience to
            contribute to innovative projects and collaborate with talented
            professionals.
          </p>
        </div>
      </div>

      <div className="py-5">
        <p className="page-title">Education</p>
        <div className="flex flex-wrap justify-around text-left">
          {educations.map((edu, idx) => (
            <EducationCard key={idx} edu={edu} />
          ))}
        </div>
      </div>

      <div className="neo-morph-dark py-5">
        <p className="page-title">Experience</p>
        <div className="flex flex-wrap justify-around text-left">
          {experiences.map((xp, idx) => (
            <ExperienceCard key={idx} xp={xp} />
          ))}
        </div>
      </div>

      <div className="py-5">
        <p className="page-title">Acheivements</p>
      </div>
    </div>
  );
}

import { HiOutlineOfficeBuilding } from "react-icons/hi";
import ExperienceCard, { ExperienceContent } from "./ui/ExperienceCard";
import Separator from "../ui/Separator";
import EducationCard, { EducationContent } from "./ui/EducationCard";
import { FaGraduationCap } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import Image from "next/image";
import AchievementCard, { AchievementContent } from "./ui/AchievementCard";

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
  ];

  const achievements: AchievementContent[] = [
    {
      title: "Learning Experience Design",
      icon: <GrCertificate size="48px" />,
      institution: "LXD Academy",
      type: "Training",
      take_away: "Certification",
      location: "Addis Ababa, Ethiopia",
      start_date: "Oct. 2018",
      end_date: "Sept. 2022",
    },
    {
      title: "Business Leadership",
      icon: <GrCertificate size="48px" />,
      institution: "School of Commerce, Addis Ababa University",
      type: "Training",
      take_away: "Certification",
      location: "Addis Ababa, Ethiopia",
      start_date: "Oct. 2018",
      end_date: "Sept. 2022",
    },
    {
      title: "Business Leadership",
      icon: <GrCertificate size="48px" />,
      institution: "School of Commerce, Addis Ababa University",
      type: "Training",
      take_away: "Certification",
      location: "Addis Ababa, Ethiopia",
      start_date: "Oct. 2018",
      end_date: "Sept. 2022",
    },
    {
      title: "Business Leadership",
      icon: <GrCertificate size="48px" />,
      institution: "School of Commerce, Addis Ababa University",
      type: "Training",
      take_away: "Certification",
      location: "Addis Ababa, Ethiopia",
      start_date: "Oct. 2018",
      end_date: "Sept. 2022",
    },
  ];

  return (
    <div className="min-h-screen text-center neo-morph-dark-faded">
      <div className="flex justify-center w-full">
        {/* INTRODUCTION */}
        <div className="flex justify-center w-fit my-5 neo-morph-dark-faded border border-opacity-10 border-custom-bg-secondary rounded-3xl">
          <div className="flex items-center justify-center gap-5 p-5">
            <Image
              src="/imgs/Upwork.jpg"
              alt="Profile Picture"
              width={100}
              height={100}
              className="rounded-full shashow-2xl"
            />
            <div className="text-left">
              <p className="font-semibold">Abel Matheos Getiso</p>
              <p className="">B.Sc. Computer Science</p>
              <p className="">Programmer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="neo-morph-dark pt-10 pb-10">
        <p className="page-title">Professional Background</p>
        <div className="flex flex-col items-center">
          <p className="sm:w-3/5 md:w-2/3 font-medium">
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
        <div className="flex flex-wrap justify-center text-left">
          {achievements.map((achievement, idx) => (
            <AchievementCard key={idx} achievement={achievement} />
          ))}
        </div>
      </div>
    </div>
  );
}

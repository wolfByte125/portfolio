import { HiOutlineOfficeBuilding } from "react-icons/hi";
import ExperienceCard, { ExperienceContent } from "./ui/ExperienceCard";
import Marquee from "@/components/ui/marquee";
import Separator from "../ui/Separator";
import EducationCard, { EducationContent } from "./ui/EducationCard";
import { FaGraduationCap } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import Image from "next/image";
import AchievementCard, { AchievementContent } from "./ui/AchievementCard";
import { Tooltip } from "@nextui-org/tooltip";
import { BiLogoGoLang } from "react-icons/bi";
import { DiPostgresql } from "react-icons/di";
import { FaGitAlt, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiCsharp,
  SiDaisyui,
  SiDotnet,
  SiDrizzle,
  SiJavascript,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiMui,
  SiMysql,
  SiTailwindcss,
  SiTypescript,
  SiVitest,
} from "react-icons/si";

export interface SkillData {
  logo: React.ReactNode;
  name: string;
}
export default function page() {
  const skills: SkillData[] = [
    {
      logo: <SiDotnet size="64px" />,
      name: "ASP .NET Core",
    },
    {
      logo: <FaGitAlt size="64px" />,
      name: "Git",
    },
    {
      logo: <SiDaisyui size="64px" />,
      name: "DaisyUI",
    },
    {
      logo: <SiTailwindcss size="64px" />,
      name: "Tailwind CSS",
    },
    {
      logo: <FaReact size="64px" />,
      name: "ReactJS",
    },
    {
      logo: <SiMicrosoftsqlserver size="64px" />,
      name: "Microsoft SQL Server",
    },
    {
      logo: <SiMongodb size="64px" />,
      name: "MongoDB",
    },
    {
      logo: <SiTypescript size="64px" />,
      name: "TypeScript",
    },
    {
      logo: <SiMui size="64px" />,
      name: "Material UI",
    },

    {
      logo: <RiNextjsFill size="64px" />,
      name: "Next.js",
    },
    {
      logo: <IoLogoCss3 size="64px" />,
      name: "CSS3",
    },
    {
      logo: <SiJavascript size="64px" />,
      name: "JavaScript",
    },
    {
      logo: <SiVitest size="64px" />,
      name: "Vitest",
    },
    {
      logo: <SiDrizzle size="64px" />,
      name: "Drizzle ORM",
    },
    {
      logo: <DiPostgresql size="64px" />,
      name: "PostgreSQL",
    },
    {
      logo: <IoLogoFirebase size="64px" />,
      name: "Firebase",
    },
    {
      logo: <SiCsharp size="64px" />,
      name: "C#",
    },
    {
      logo: <SiMysql size="64px" />,
      name: "MySQL",
    },
    {
      logo: <BiLogoGoLang size="64px" />,
      name: "GoLang",
    },
  ];

  const firstRow = skills.slice(0, skills.length / 2);
  const secondRow = skills.slice(skills.length / 2);
  const experiences: ExperienceContent[] = [
    {
      company: "Meselal Technologies",
      icon: <HiOutlineOfficeBuilding size="48px" />,
      company_website: "https://meselaltech.com/",
      role: "Backend Developer",
      location: "Addis Ababa, Ethiopia",
      start_date: "Aug. 2022",
      end_date: "Oct. 2024",
    },
    {
      company: "Meselal Technologies",
      icon: <HiOutlineOfficeBuilding size="48px" />,
      company_website: "https://meselaltech.com/",
      role: "Team Leader",
      location: "Addis Ababa, Ethiopia",
      start_date: "Aug. 2023",
      end_date: "Oct. 2024",
    },
    {
      company: "Unity University",
      icon: <HiOutlineOfficeBuilding size="48px" />,
      company_website: "",
      role: "Lecturer (Graduate Assistant)",
      location: "Addis Ababa, Ethiopia",
      start_date: "Dec. 2022",
      end_date: "Mar. 2023",
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
      start_date: "Aug. 2022",
      end_date: "Oct. 2022",
    },
    {
      title: "Business Leadership",
      icon: <GrCertificate size="48px" />,
      institution: "School of Commerce, Addis Ababa University",
      type: "Training",
      take_away: "Certification",
      location: "Addis Ababa, Ethiopia",
      start_date: "Oct. 2022",
      end_date: "Nov. 2022",
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

      {/* SKILLS */}
      <div className="flex justify-center flex-wrap w-screen neo-morph-dark-faded text-center">
        <p className="page-title font-mono">Skills</p>

        <Marquee pauseOnHover className="[--duration:60s]">
          {firstRow.map((skill, idx) => (
            <div
              key={idx}
              className="p-10 neo-morph-dark rounded-md h-fit w-fit text-center border border-opacity-10 border-custom-bg-secondary"
            >
              <Tooltip
                key={skill?.name}
                content={skill?.name ?? ""}
                className="font-mono text-xs"
              >
                {skill.logo}
              </Tooltip>
            </div>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:60s]">
          {secondRow.map((skill, idx) => (
            <div
              key={idx}
              className="p-10 neo-morph-dark rounded-md h-fit w-fit text-center border border-opacity-10 border-custom-bg-secondary"
            >
              <Tooltip
                key={skill?.name}
                content={skill?.name ?? ""}
                className="font-mono text-xs"
              >
                {skill.logo}
              </Tooltip>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

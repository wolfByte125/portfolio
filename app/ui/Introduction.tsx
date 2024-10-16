import { Tooltip } from "@nextui-org/tooltip";
import Image from "next/image";
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

export default function Introduction() {
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
      name: "Drizzle ORM",
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
  return (
    <div className="min-w-full min-h-screen text-center pt-10">
      {/* INTRODUCTION */}
      <div className="min-h-screen pt-10">
        <div className="flex justify-center w-full h-fit">
          <Image
            src="/imgs/Upwork.jpg"
            alt="Profile Picture"
            width={250}
            height={250}
            className="rounded-full shashow-2xl"
          />
        </div>
        <p className="font-mono flex justify-center font-medium text-4xl text-center my-5">
          Hello, World!
          <br />
          I&apos;m Abel.
        </p>
        <div className="flex justify-center">
          <p className="font-mono sm:w-full md:w-2/5">
            A versatile web developer with over 2 years of experience in
            crafting innovative web applications.
          </p>
        </div>
      </div>
      {/* BRIEF DESCRIPTION FROM ABOUT PAGE */}
      {/* SKILLS */}
      <div className="flex justify-center flex-wrap w-full neo-morph-dark-faded text-center min-h-screen px-20 pb-5">
        <p className="page-title font-mono">Skills</p>
        <div className="flex justify-center flex-wrap gap-5">
          {skills.map((skill, idx) => (
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
        </div>
      </div>
    </div>
  );
}

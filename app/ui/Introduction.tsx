import Image from "next/image";
import Link from "next/link";
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
      <div className="neo-morph-dark-faded pt-10 pb-10 flex">
        <div className="w-1/3 flex items-center justify-center">
          <p className="text-4xl">About Me</p>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="w-2/3">
          <div className="flex flex-col items-center">
            <p className="sm:w-3/5 md:w-2/3 font-medium text-left">
              I&apos;m a full-stack (backend-leaning) web developer with over 2
              years of experience in crafting innovative web applications. My
              expertise spans various domains, including but not limited to ERP
              systems.
              <p className="my-5"></p>
              I&apos;ve successfully managed projects, ensuring efficient
              workflows and meeting project deadlines. I&apos;ve also played a
              crucial role in on-boarding new team members, providing them with
              the necessary training and support. I&apos;m passionate about
              collaboration and mentoring.
              <p className="my-5"></p>
              I&apos;m driven by a desire to continuously learn and grow as a
              developer. I&apos;m excited to leverage my skills and experience
              to contribute to innovative projects and collaborate with talented
              professionals.
            </p>
          </div>
          <div>
            <Link href="/about" className="btn btn-primary my-5">
              <p>More Details</p>
            </Link>
          </div>
        </div>
      </div>
      {/* SKILLS */}
      <div className="flex justify-center flex-wrap w-screen neo-morph-dark-faded text-center">
        {/* <p className="page-title font-mono">Skills</p> */}
        {/*<div className="justify-center gap-5">*/}
        {/* {skills.map((skill, idx) => (
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
          ))} */}
        {/* <Marquee pauseOnHover className="[--duration:60s]">
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
          </Marquee> */}
      </div>
      {/*</div>*/}
    </div>
  );
}

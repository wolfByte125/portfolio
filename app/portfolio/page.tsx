import { FaGithub, FaReact } from "react-icons/fa";
import ProjectCard, { ProjectCardProp } from "./ui/ProjectCard";
import {
  SiDaisyui,
  SiDotnet,
  SiMicrosoftsqlserver,
  SiMui,
  SiTailwindcss,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { Tooltip } from "@nextui-org/tooltip";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const projects: ProjectCardProp[] = [
    // PORTFOLIO
    {
      title: "Portfolio",
      banner: "/prjs/portfolio/home.png",
      technologies: [
        {
          name: "Next.js",
          logo: <RiNextjsFill size="24px" />,
        },
        {
          name: "Daisy UI",
          logo: <SiDaisyui size="32px" />,
        },
        {
          name: "TailwindCSS",
          logo: <SiTailwindcss size="24px" />,
        },
      ],
      description:
        "This project is the one you're currently browsing through. I built this portfolio project so that it is more accessible and attractive to potential partners, employers and anyone interested in collaboration.",
      github_repo_link: "asdf",
    },
    // BLOGGER
    {
      title: "blogger",
      banner: "/prjs/blogger/home.png",
      technologies: [
        {
          name: "ReactJS",
          logo: <FaReact size="24px" />,
        },
        {
          name: "Daisy UI",
          logo: <SiDaisyui size="32px" />,
        },
        {
          name: "TailwindCSS",
          logo: <SiTailwindcss size="24px" />,
        },
        {
          name: "ASP .NET Core",
          logo: <SiDotnet size="24px" />,
        },
        {
          name: "Microsoft SQL Server",
          logo: <SiMicrosoftsqlserver size="24px" />,
        },
      ],
      description:
        "blogger is a simple blog post web app with the core CRUD functionalities for any major project. It was developed for the purpose of onboarding new recruits, interns and employees, for my previous employer (Meselal Technologies). The major target was to introduce our recruits to the tech stack we used (ReactJS, RTK Query, ASP .NET Core) for our products without complicating the system design.",
      github_repo_link: "asdf",
    },
    // AAU BLOG POST
    {
      title: "AAU Blog Post",
      banner: "/prjs/aau-post/home.png",
      technologies: [
        {
          name: "ReactJS",
          logo: <FaReact size="24px" />,
        },
        {
          name: "Material UI",
          logo: <SiMui size="24px" />,
        },
        {
          name: "Daisy UI",
          logo: <SiDaisyui size="32px" />,
        },
        {
          name: "TailwindCSS",
          logo: <SiTailwindcss size="24px" />,
        },
        {
          name: "ASP .NET Core",
          logo: <SiDotnet size="24px" />,
        },
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione incidunt eligendi, nulla provident alias nesciunt amet qui maxime quaerat ullam minima quasi, officiis dolore assumenda cum culpa eveniet? Excepturi voluptates sequi laudantium nisi eveniet cum modi voluptatum, autem vero veritatis libero omnis inventore nam possimus pariatur, magni eius corrupti quae!",
      github_repo_link: "",
    },
    // CRIME ALERT
    {
      title: "Crime Alert",
      banner: "/prjs/crime-alert/logo-dark.png",
      technologies: [
        {
          name: "ReactJS",
          logo: <FaReact size="24px" />,
        },
        {
          name: "Material UI",
          logo: <SiMui size="24px" />,
        },
        {
          name: "Firebase",
          logo: <IoLogoFirebase size="24px" />,
        },
      ],
      description:
        "Crime Alert was a project developed by four other developers and myself as a final project during our senior year of university. The concept behind its development was to contribute to the fight against crime by highlighting locations of threat to safety. It was designed to speed up the slow propagation of crime awareness and provide people with the information they need to be safe.",
      github_repo_link: "",
    },
    // HOME MANAGEMENT
    {
      title: "Home Management",
      banner: "IN PROGRESS...",
      technologies: [
        {
          name: "ReactJS",
          logo: <FaReact size="24px" />,
        },
        {
          name: "Daisy UI",
          logo: <SiDaisyui size="32px" />,
        },
        {
          name: "TailwindCSS",
          logo: <SiTailwindcss size="24px" />,
        },
        {
          name: "ASP .NET Core",
          logo: <SiDotnet size="24px" />,
        },
        {
          name: "Microsoft SQL Server",
          logo: <SiMicrosoftsqlserver size="24px" />,
        },
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione incidunt eligendi, nulla provident alias nesciunt amet qui maxime quaerat ullam minima quasi, officiis dolore assumenda cum culpa eveniet? Excepturi voluptates sequi laudantium nisi eveniet cum modi voluptatum, autem vero veritatis libero omnis inventore nam possimus pariatur, magni eius corrupti quae!",
      github_repo_link: "",
    },
  ];

  return (
    <div className="pt-10">
      <p className="page-title">Portfolio | Personal Projects</p>
      <div className="min-w-full min-h-screen">
        {/* PROJECT 0 - PORTFOLIO*/}
        <div className="neo-morph-dark rounded-r-3xl w-4/5 h-fit p-5 my-5 mx-auto">
          <div className="flex w-full">
            <div className="w-2/5 pr-5 flex items-center justify-center">
              <Image
                src={projects[0].banner}
                alt="alt"
                width={674}
                height={276}
                className="h-fit w-fit"
              />
            </div>
            <div className="w-3/5">
              <div className="mb-5 font-semibold">{projects[0].title}</div>
              <div className="flex w-3/5">
                {projects[0].technologies?.map((tech, idx) => (
                  <div key={idx} className="mr-5 mb-5">
                    <Tooltip
                      key={tech?.name}
                      content={tech?.name ?? ""}
                      className="font-extralight text-xs"
                    >
                      <button className="w-1/3">{tech.logo}</button>
                    </Tooltip>
                  </div>
                ))}
              </div>
              <div className="mb-5">
                {projects[0].description.length > 250
                  ? projects[0].description.substring(0, 250) + "..."
                  : projects[0].description}
              </div>
              {projects[0].description.length > 250 && (
                <button className="btn mb-5">Read More</button>
              )}
              <div className="w-fit">
                {projects[0].github_repo_link != "" && (
                  <Link href={projects[0].github_repo_link}>
                    <FaGithub size="24px" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* PROJECT 1 - BLOGGER */}
        <div className="neo-morph-dark rounded-r-3xl w-4/5 h-fit p-5 my-5 mx-auto">
          <div className="flex w-full">
            <div className="w-2/5 pr-5 flex items-center justify-center">
              <Image
                src={projects[1].banner}
                alt="alt"
                width={674}
                height={276}
                className="h-fit w-fit"
              />
            </div>
            <div className="w-3/5">
              <div className="mb-5 font-semibold">{projects[1].title}</div>
              <div className="flex w-3/5">
                {projects[1].technologies?.map((tech, idx) => (
                  <div key={idx} className="mr-5 mb-5">
                    <Tooltip
                      key={tech?.name}
                      content={tech?.name ?? ""}
                      className="font-extralight text-xs"
                    >
                      <button className="w-1/3">{tech.logo}</button>
                    </Tooltip>
                  </div>
                ))}
              </div>
              <div className="mb-5">
                {projects[1].description.length > 250
                  ? projects[1].description.substring(0, 250) + "..."
                  : projects[1].description}
              </div>
              {projects[1].description.length > 250 && (
                <button className="btn mb-5">Read More</button>
              )}
              <div className="w-fit">
                {projects[1].github_repo_link != "" && (
                  <Link href={projects[1].github_repo_link}>
                    <FaGithub size="24px" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* PROJECT 2 - AAU BLOG POST */}
        <div className="neo-morph-dark rounded-r-3xl w-4/5 h-fit p-5 my-5 mx-auto">
          <div className="flex w-full">
            <div className="w-2/5 pr-5 flex items-center justify-center">
              <Image
                src={projects[2].banner}
                alt="alt"
                width={674}
                height={276}
                className="h-fit w-fit"
              />
            </div>
            <div className="w-3/5">
              <div className="mb-5 font-semibold">{projects[2].title}</div>
              <div className="flex w-3/5">
                {projects[2].technologies?.map((tech, idx) => (
                  <div key={idx} className="mr-5 mb-5">
                    <Tooltip
                      key={tech?.name}
                      content={tech?.name ?? ""}
                      className="font-extralight text-xs"
                    >
                      <button className="w-1/3">{tech.logo}</button>
                    </Tooltip>
                  </div>
                ))}
              </div>
              <div className="mb-5">
                {projects[2].description.length > 250
                  ? projects[2].description.substring(0, 250) + "..."
                  : projects[2].description}
              </div>
              {projects[2].description.length > 250 && (
                <button className="btn mb-5">Read More</button>
              )}
              <div className="w-fit">
                {projects[2].github_repo_link != "" && (
                  <Link href={projects[2].github_repo_link}>
                    <FaGithub size="24px" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* PROJECT 3 - CRIME ALERT */}
        <div className="neo-morph-dark rounded-r-3xl w-4/5 h-fit p-5 my-5 mx-auto">
          <div className="flex w-full">
            <div className="w-2/5 pr-5 flex items-center justify-center">
              <Image
                src={projects[3].banner}
                alt="alt"
                width={674}
                height={276}
                className="h-fit w-fit"
              />
            </div>
            <div className="w-3/5">
              <div className="mb-5 font-semibold">{projects[3].title}</div>
              <div className="flex w-3/5">
                {projects[3].technologies?.map((tech, idx) => (
                  <div key={idx} className="mr-5 mb-5">
                    <Tooltip
                      key={tech?.name}
                      content={tech?.name ?? ""}
                      className="font-extralight text-xs"
                    >
                      <button className="w-1/3">{tech.logo}</button>
                    </Tooltip>
                  </div>
                ))}
              </div>
              <div className="mb-5">
                {projects[3].description.length > 250
                  ? projects[3].description.substring(0, 250) + "..."
                  : projects[3].description}
              </div>
              {projects[3].description.length > 250 && (
                <button className="btn mb-5">Read More</button>
              )}
              <div className="w-fit">
                {projects[3].github_repo_link != "" && (
                  <Link href={projects[3].github_repo_link}>
                    <FaGithub size="24px" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* PROJECT 4 - HOME MANAGEMENT */}
        <div className="neo-morph-dark rounded-r-3xl w-4/5 h-fit p-5 my-5 mx-auto">
          <div className="flex w-full">
            <div className="w-2/5 pr-5 flex items-center justify-center">
              BANNER
            </div>
            <div className="w-3/5">
              <div className="mb-5 font-semibold">{projects[4].title}</div>
              <div className="flex w-3/5">
                {projects[4].technologies?.map((tech, idx) => (
                  <div key={idx} className="mr-5 mb-5">
                    <Tooltip
                      key={tech?.name}
                      content={tech?.name ?? ""}
                      className="font-extralight text-xs"
                    >
                      <button className="w-1/3">{tech.logo}</button>
                    </Tooltip>
                  </div>
                ))}
              </div>
              <div className="mb-5">
                {projects[4].description.length > 250
                  ? projects[4].description.substring(0, 250) + "..."
                  : projects[4].description}
              </div>
              {projects[4].description.length > 250 && (
                <button className="btn mb-5">Read More</button>
              )}
              <div className="w-fit">
                {projects[4].github_repo_link != "" && (
                  <Link href={projects[4].github_repo_link}>
                    <FaGithub size="24px" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

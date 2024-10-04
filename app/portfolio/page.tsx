import { FaReact } from "react-icons/fa";
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

export default function Projects() {
  const projects: ProjectCardProp[] = [
    {
      title: "Portfolio",
      banner: "Banner",
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
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      github_repo_link: "asdf",
    },
    {
      title: "On Boarding Demo",
      banner: "Banner",
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
      github_repo_link: "asdf",
    },
    {
      title: "Home Management",
      banner: "Banner",
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
    {
      title: "AAU Blog Post",
      banner: "/prjs/aau-post.png",
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
    {
      title: "Crime Alert",
      banner: "Banner",
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
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione incidunt eligendi, nulla provident alias nesciunt amet qui maxime quaerat ullam minima quasi, officiis dolore assumenda cum culpa eveniet? Excepturi voluptates sequi laudantium nisi eveniet cum modi voluptatum, autem vero veritatis libero omnis inventore nam possimus pariatur, magni eius corrupti quae!",
      github_repo_link: "",
    },
  ];

  return (
    <div className="pt-10">
      <p className="page-title">Portfolio | Personal Projects</p>
      <div className="min-w-full min-h-screen">
        {projects?.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  );
}

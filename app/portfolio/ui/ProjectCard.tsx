import { Tooltip } from "@nextui-org/tooltip";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export interface ProjectCardProp {
  title: string;
  banner: string;
  technologies: TechnologiesObj[];
  description: string;
  github_repo_link: string;
}

export interface TechnologiesObj {
  name: string;
  logo: React.ReactNode;
}

export default function ProjectCard({ project }: { project: ProjectCardProp }) {
  const { title, banner, technologies, description, github_repo_link } =
    project;

  return (
    <div className="neo-morph-dark rounded-r-3xl w-4/5 h-fit p-5 my-5 mx-auto">
      <div className="flex w-full">
        <div className="w-2/5 flex items-center justify-center"></div>
        <div className="w-3/5">
          <div className="mb-5 font-semibold">{title}</div>
          <div className="flex w-3/5">
            {technologies?.map((tech, idx) => (
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
            {description.length > 250
              ? description.substring(0, 250) + "..."
              : description}
          </div>
          {description.length > 250 && (
            <button className="btn mb-5">Read More</button>
          )}
          <div className="w-fit">
            {github_repo_link != "" && (
              <Link href={github_repo_link}>
                <FaGithub size="24px" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

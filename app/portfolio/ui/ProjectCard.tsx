import { Tooltip } from "@nextui-org/tooltip";
import Link from "next/link";

export interface ProjectCardProp {
  title: string;
  banner: string;
  technologies: TechnologiesObj[];
  description: string;
  github_repo_link: string;
}

export interface TechnologiesObj {
  name: string;
  logo: string;
}

export default function ProjectCard({ project }: { project: ProjectCardProp }) {
  const { title, banner, technologies, description, github_repo_link } =
    project;

  return (
    <div className="neo-morph-dark rounded-md w-3/5 h-fit p-5 my-5 mx-auto">
      <div className="flex w-full">
        <div className="w-4/5">
          <div>{title}</div>
          {/* BANNER GOES HERE */}
          <div></div>
          <div className="flex">
            {technologies?.map((tech, idx) => (
              <div key={idx} className="mr-5 my-5">
                <Tooltip key={tech?.name} content={tech?.name ?? ""}>
                  <button>{tech.logo}</button>
                </Tooltip>
              </div>
            ))}
          </div>
          <div>{description}</div>
        </div>
        {github_repo_link != "" && (
          <div className="w-1/5 flex items-center justify-center">
            <Link href={github_repo_link}>
              <p>GitHub Link</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

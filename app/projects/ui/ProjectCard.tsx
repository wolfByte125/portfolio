export interface ProjectCardProp {
  title: string;
  technologies: TechnologiesObj[];
  description: string;
}

export interface TechnologiesObj {
  name: string;
  logo: string;
}

export default function ProjectCard({ project }: { project: ProjectCardProp }) {
  return (
    <div>
      <div>{project.title}</div>

      <div className="flex">
        {project.technologies?.map((tech, idx) => (
          <div key={idx}>
            <p>{tech.logo}</p>
            {/* MAKE TEXT TO TOOLTIP THAT APPEARS ON HOVER */}
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
      <div>{project.description}</div>
    </div>
  );
}

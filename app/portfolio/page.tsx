import ProjectCard, { ProjectCardProp } from "./ui/ProjectCard";

export default function Projects() {
  const projects: ProjectCardProp[] = [
    {
      title: "On Boarding Demo",
      banner: "Banner",
      technologies: [
        {
          name: "Next.js",
          logo: "NXTJ",
        },
        {
          name: "daisyui",
          logo: "DU",
        },
        {
          name: "tailwindcss",
          logo: "TWC",
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
          name: "Next.js",
          logo: "NXTJ",
        },
        {
          name: "daisyui",
          logo: "DU",
        },
        {
          name: "tailwindcss",
          logo: "TWC",
        },
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione incidunt eligendi, nulla provident alias nesciunt amet qui maxime quaerat ullam minima quasi, officiis dolore assumenda cum culpa eveniet? Excepturi voluptates sequi laudantium nisi eveniet cum modi voluptatum, autem vero veritatis libero omnis inventore nam possimus pariatur, magni eius corrupti quae!",
      github_repo_link: "",
    },
    {
      title: "AAU Blog Post",
      banner: "Banner",
      technologies: [
        {
          name: "Next.js",
          logo: "NXTJ",
        },
        {
          name: "daisyui",
          logo: "DU",
        },
        {
          name: "tailwindcss",
          logo: "TWC",
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

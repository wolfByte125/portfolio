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
      description: "Demo description",
      github_repo_link: "",
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
      description: "Demo description",
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

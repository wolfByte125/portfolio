import ProjectCard, { ProjectCardProp } from "./ui/ProjectCard";

export default function Projects() {
  const projects: ProjectCardProp[] = [
    {
      title: "Test Project",
      technologies: [
        {
          name: "Next.js",
          logo: "=",
        },
        {
          name: "daisyui",
          logo: ">",
        },
        {
          name: "tailwindcss",
          logo: "<",
        },
      ],
      description: "Demo description",
    },
  ];

  return (
    <div className="min-w-full min-h-screen my-1">
      {/* Projects Page */}
      {projects?.map((project, idx) => (
        <ProjectCard key={idx} project={project} />
      ))}
    </div>
  );
}

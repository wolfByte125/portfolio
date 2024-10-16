"use client";
import { useState } from "react";
import { ProjectCardProp } from "./ProjectCard";

export default function ProjectDescription({
  projectDescription,
}: {
  projectDescription: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false); // State inside each card

  const toggleDescription = () => {
    setIsExpanded(!isExpanded); // Toggle text for the specific card
  };
  return (
    <div>
      <div className="mb-5">
        {isExpanded
          ? projectDescription
          : projectDescription.length > 250
          ? projectDescription.substring(0, 250) + "..."
          : projectDescription}
      </div>

      {projectDescription.length > 250 && (
        <div>
          <button className="btn mb-5" onClick={toggleDescription}>
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
      )}
    </div>
  );
}

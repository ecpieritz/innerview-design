import React from "react";
import ProjectsItem from "../components/Projects/ProjectsItem";

function Projects() {
  const projects = [
    {
      title: "aaa",
      description: "bbb"
    },
    {
      title: "ddd",
      description: "eee"
    },
    {
      title: "fff",
      description: "ggg"
    },
    {
      title: "hhh",
      description: "iii"
    },
  ]

  return (
    <main className="id-projects">
      {projects.map(project => (
        <ProjectsItem  title={project.title} description={project.description} />
      ))}
    </main>
  );
}

export default Projects;

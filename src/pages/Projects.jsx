import React from "react";
import ProjectsItem from "../components/Projects/ProjectsItem";

function Projects() {
  const projects = [
    {
      title: "Showcasing the Beautiful Spectrum of Skin Tones",
      description: "Explore the richness of differences in our Profile Pictures Project. Each portrait reveals the unique beauty of individuals' varying skin tones. A celebration of authenticity and the diversity that makes us all unique."
    },
    {
      title: "Beauty of Working Women: A Photographic Tribute",
      description: "In this project, we capture the essence of strength and beauty in women who play pivotal roles in various fields of work. Each image is a tribute to the resilience and grace of working women."
    },
    {
      title: "Time-Traveling Through Photography",
      description: "Travel back in time with our Vintage-Inspired Fashion Photography Project, drawing inspiration from the 1920s to the 1960s. Each image pays homage to the timeless elegance and iconic fashion of those eras, infusing a hint of nostalgia into the present day."
    },
    {
      title: "Underwear: Celebrating Everyday Fashion",
      description: "This project celebrates the beauty of everyday fashion, highlighting the comfort, style, and authenticity of everyday underwear, an integral part of our daily lives. It's a heartfelt tribute to fashion that's intimately connected to both our hearts and bodies."
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

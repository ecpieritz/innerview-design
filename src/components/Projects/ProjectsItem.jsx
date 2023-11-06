import React from "react";

function ProjectsItem({title, description }) {
  return (
    <section className="id-projects__item">
      <div className="container-fluid">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
}

export default ProjectsItem;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function ProjectsItem({title, description, id }) {
  return (
    <section className="id-projects__item">
      <div className="container-fluid">
        <div className="id-projects__item__text">
          <h2>{title}</h2>
          <div className="row">
            <div className="col-md-2">
              <h3>{id}</h3>
            </div>
            <div className="col-md-8">
              <p>{description}</p>
            </div>
            <div className="col-md-2">
              <a className="id-btn arrow white" href="/projects/single-project">
                View Project <FontAwesomeIcon icon={faArrowRightLong} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsItem;

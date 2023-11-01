import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function HomeProjects() {
  return (
    <section className="id-home__projects">
      <div className="container-fluid">
        <div className="id-home__projects__texts">
          <h2>Featured Projects</h2>
          <p>
            Immerse yourself in the art of visual storytelling within our
            Projects. From breathtaking landscapes to intimate portraits, our
            curated projects reveal diverse perspectives. Each one is a
            carefully crafted masterpiece designed to evoke emotions and
            inspire. Whether you're an enthusiast, an art lover, or simply
            seeking inspiration, join us in celebrating the world through our
            lens.
          </p>
          <a className="id-btn arrow white" href="/about">
            View Our Projects <FontAwesomeIcon icon={faArrowRightLong} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomeProjects;

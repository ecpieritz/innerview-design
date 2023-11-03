import React from "react";
import img01 from "../../assets/img/id-about__banner__01.png";
import img02 from "../../assets/img/id-about__banner__02.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function AboutBanner() {
  return (
    <div className="id-about__banner">
      <div className="container-fluid">
        <div className="row">
          <div className="id-about__banner__img col-md-5">
            <img src={img01} alt="Man in red clothes" />
          </div>
          <div className="id-about__banner__text col-md-7">
            <h2>Learn About Our Special Approach</h2>
            <p>
              Our process is collaborative and iterative. With every new
              project, we take the time to listen to the needs of our partners
              in order to build a body of work from first principles. We divide
              the work into three phases, in which the head and the hand are
              always present: understanding, thinking and making. In every phase
              we present developments for review and feedback before progressing
              on to the next.
            </p>
            <p>
              A selection of our clients are Aller Media, Björkholmen Gallery,
              Bonnier, Breakit, Coop, Erik Penser Bank, Galleri Magnus Karlsson,
              Max, Neuro, Swedish Committee for Afghanistan, Unesco and Unicef.
            </p>
            <a className="id-btn arrow" href="/contact">
              Contact <FontAwesomeIcon icon={faArrowRightLong} />
            </a>
            <img src={img02} alt="Man in black and white filter" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutBanner;

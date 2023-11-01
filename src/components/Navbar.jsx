import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareGithub,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  const socials = [
    {
      link: "https://github.com/ecpieritz",
      img: faSquareGithub,
    },
    {
      link: "https://www.linkedin.com/in/ecpieritz/",
      img: faLinkedin,
    },
    {
      link: "https://www.instagram.com/ecpieritz/",
      img: faSquareInstagram,
    },
  ];
  return (
    <div class="id-navbar fixed-top">
      <div className="id-navbar__nav">
        <nav class="navbar navbar-dark">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <a className="id-navbar__nav__logo" href="/">
            <p>InnerView</p>
          </a>

          <div className="id-navbar__nav__socials">
            {socials.map((social, index) => (
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <FontAwesomeIcon icon={social.img} />
              </a>
            ))}
          </div>
        </nav>
      </div>
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
          <h5 class="text-white h4">Collapsed content</h5>
          <span class="text-muted">Toggleable via the navbar brand.</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

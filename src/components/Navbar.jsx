import React from "react";
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareGithub,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
  const links = [
    {
      url: "/",
      text: "Home",
    },
    {
      url: "/about",
      text: "About",
    },
    {
      url: "/projects",
      text: "Projects",
    },
    {
      url: "/clients",
      text: "Clients",
    },
    {
      url: "/contact",
      text: "Contact",
    },
  ];
  const location = useLocation();
  const isAboutOrContact = location.pathname === '/about' || location.pathname === '/contact';
  return (
    <div className={`id-navbar ${isAboutOrContact ? 'black' : ''} fixed-top`}>
      <div className="id-navbar__nav">
        <nav class="navbar navbar-dark">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#id-navbar"
            aria-controls="id-navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} />
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
      <div class="collapse id-navbar__links" id="id-navbar">
        <div class="content">
          {links.map((link, index) => (
            <a
              href={link.url}
              rel="noopener noreferrer"
              key={index}
              className="id-navbar__links__link"
            >
              <p>{link.text}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

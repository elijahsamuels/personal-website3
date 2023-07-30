import React from "react";
import { SiFacebook, SiLinkedin, SiGithub } from "react-icons/si";
import { VscMail } from "react-icons/vsc";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="Footer">
      <a
        href="https://www.linkedin.com/in/elijahsamuels"
        target="_blank"
        rel="noreferrer"
        className="link social-media-icon">
        <SiLinkedin size="1em" />
      </a>
      <a
        href="https://github.com/elijahsamuels"
        target="_blank"
        rel="noreferrer"
        className="link social-media-icon">
        <SiGithub size="1em" />
      </a>
      <a
        href="https://www.facebook.com/elijah.samuels.1"
        target="_blank"
        rel="noreferrer"
        className="link social-media-icon">
        <SiFacebook size="1em" />
      </a>
      <a
        href="mailto:elijahsamuels@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="link social-media-icon">
        <VscMail size="1em" />
      </a>
    </footer>
  );
};

export default Footer;

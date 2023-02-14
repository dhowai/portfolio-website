import React from "react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/daryl-howai-934444211/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://github.com/dhowai" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          href="https://twitter.com/DarylHowai_dev"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;

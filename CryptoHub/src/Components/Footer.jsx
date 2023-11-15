import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import RedditIcon from "@mui/icons-material/Reddit";

const Footer = () => {
  return (
    <div className="footer bg-darkBlue p-4 text-white flex flex-col gap-[10px] items-center">
      <h1>CryptoHub by Nipun Kupatkar</h1>
      <h1>ALL Rights Reserved</h1>
      <div className="socials px-4 flex gap-[8px] ml-auto">
        <h1>Get Social</h1>
        <button>
          <a href="https://www.instagram.com/wonder_boy_2206/" target="_blank">
            <InstagramIcon />
          </a>
        </button>
        <button>
          <a
            href="https://www.linkedin.com/in/nipun-kupatkar-2b1989230/"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
        </button>
        <button>
          <a href="https://github.com/wonderboy002" target="_blank">
            <GitHubIcon />
          </a>
        </button>
        <button>
          <a href="#" target="_blank">
            <RedditIcon />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Footer;

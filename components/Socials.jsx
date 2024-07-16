import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/bad-creator" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/serghei-pascal-23436a121/",
  },
  // { icon: <FaYoutube />, path: "" },
  // { icon: <RiTwitterXFill />, path: "" },
];

export default function Socials({ containerStyles, iconStyles }) {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link
            href={social.path}
            key={index}
            className={iconStyles}
            target="blank"
          >
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
}

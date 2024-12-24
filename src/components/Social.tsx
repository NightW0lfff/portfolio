import Link from "next/link";
import { JSX } from "react";

import { FaGithub, FaLinkedinIn, FaFacebook } from "react-icons/fa";

interface Social {
  icon: JSX.Element;
  path: string;
}

const socials: Social[] = [
  { icon: <FaGithub />, path: "https://github.com/NightW0lfff" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/long-nguyen-62a3a41b0/",
  },
  { icon: <FaFacebook />, path: "https://www.facebook.com/longnguyen1701" },
];

function Social({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            target="_blank"
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}

export default Social;

import Link from "next/link";
import { JSX } from "react";

import { FaGithub, FaLinkedinIn, FaFacebook } from "react-icons/fa";

interface Social {
  icon: JSX.Element;
  path: string;
}

const socials: Social[] = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedinIn />, path: "" },
  { icon: <FaFacebook />, path: "" },
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
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}

export default Social;

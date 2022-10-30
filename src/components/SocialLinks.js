import React from "react";
import socialLinks from "../utils/socialLinks";

const SocialLinks = () => {
  return (
    <>
      {socialLinks.map((socialLink) => {
        const { id, path, icon } = socialLink;
        return (
          <li key={id}>
            <a href={path} className="social-icon">
              {icon}
            </a>
          </li>
        );
      })}
    </>
  );
};

export default SocialLinks;

import React from "react";
import socialLinks from "../utils/socialLinks";
import { Link } from "react-router-dom";

const SocialLinks = () => {
  return (
    <>
      {socialLinks.map((socialLink) => {
        const { id, path, icon } = socialLink;
        return (
          <li key={id}>
            <Link to={path} className="social-icon">
              {icon}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default SocialLinks;

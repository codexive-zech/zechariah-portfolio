import React from "react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <>
      {/* <!-- footer --> */}
      <footer class="footer">
        <ul class="social-icons">
          <SocialLinks />
        </ul>
        <p>
          &copy; <span>{date}</span>. All rights reserved. Zechariah Hounwanou.
        </p>
      </footer>
      {/* <!-- end of Footer -->  */}
    </>
  );
};

export default Footer;

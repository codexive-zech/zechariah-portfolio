import React from "react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <>
      {/* <!-- footer --> */}
      <footer class="footer">
        <ul class="social-icons">
          <SocialLinks color={"white"} />
        </ul>
        <p>
          &copy; <span>{date}</span>. Designed &amp; Developed by Zechariah
          Hounwanou.
        </p>
      </footer>
      {/* <!-- end of Footer -->  */}
    </>
  );
};

export default Footer;

import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import navLinks from "../utils/navLinks";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../features/navbar/navbarSlice";
import SocialLinks from "./SocialLinks";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { isSidebarOpen } = useSelector((store) => store.navbar);
  return (
    <>
      {/* sidebar */}
      <section className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
        <div>
          <button
            className="close-btn"
            onClick={() => dispatch(toggleSidebar())}
          >
            <FaTimesCircle />
          </button>
          {/* sidebar Links for small Screen */}
          <ul className="sidebar-links">
            {navLinks.map((navLink) => {
              const { id, path, text } = navLink;
              return (
                <li key={id} onClick={() => dispatch(toggleSidebar())}>
                  <Link to={path}>{text}</Link>
                </li>
              );
            })}
          </ul>
          {/* Sidebar Social Icon */}
          <ul className="social-icons">
            <SocialLinks />
          </ul>
        </div>
      </section>

      {/* end of sidebar */}
    </>
  );
};

export default Sidebar;

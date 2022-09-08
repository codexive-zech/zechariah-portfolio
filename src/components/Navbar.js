import React from "react";
import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import navLinks from "../utils/navLinks";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../features/navbar/navbarSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <>
      <nav className="nav">
        <div className="nav-center">
          {/* Nav Small Screen Header  */}
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="" />
            <button
              className="nav-btn"
              onClick={() => dispatch(toggleSidebar())}
            >
              <FaAlignRight />
            </button>
          </div>
          {/* nav Links Big Screen  */}
          <ul className="nav-links">
            {navLinks.map((navLink) => {
              const { id, path, text } = navLink;
              return (
                <li key={id}>
                  <Link to={path}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      ;
    </>
  );
};

export default Navbar;
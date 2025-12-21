import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen((prev) => !prev);
  };

  const menuIconClasses = `hamburger-icon ${isOpen ? "open" : ""}`;

  const Hamburger = (
    <div className={menuIconClasses} onClick={handleMenuClick}>
      <span className="middle-bar" />
    </div>
  );

  const MainLinks = (
    <>
      <NavLink to="/" className="nav-link-item" onClick={handleMenuClick}>
        Home
      </NavLink>
      <NavLink to="/blog" className="nav-link-item" onClick={handleMenuClick}>
        Blog
      </NavLink>
      {/* <NavLink to="/projects" className="nav-link-item" onClick={handleMenuClick}>
        Projects
      </NavLink> */}
      {/* <NavLink to="/about" className="nav-link-item" onClick={handleMenuClick}>
        About
      </NavLink> */}
      <NavLink to="/resume" className="nav-link-item" onClick={handleMenuClick}>
        Resume
      </NavLink>
      <NavLink to="/contact" className="nav-link-item" onClick={handleMenuClick}>
        Contact
      </NavLink>
    </>
  );

  return (
    <nav className={`Navbar ${isOpen ? "open" : ""}`}>
      <span className="Navbar-header">
        <NavLink to="/" className="link">
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
        {Hamburger}
      </span>

      <div className="Navbar-links-container">{MainLinks}</div>
    </nav>
  );
};

export default Navbar;

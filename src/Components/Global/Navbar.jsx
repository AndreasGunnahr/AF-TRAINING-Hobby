import React, { useState, useRef, useEffect } from "react";
import Hamburger from "Components/Global/Hamburger.jsx";
import Sidebar from "Components/Global/Sidebar.jsx";
import { Link, animateScroll as scroll } from "react-scroll";
import "Styles/Global/navbar.scss";

const Navbar = ({ sticky, stickyRef }) => {
  const [menu, setMenu] = useState([
    {
      name: "Hem",
      // link: "/",
      to: "hero",
      off: -80
    },
    {
      name: "Om oss",
      // link: "/om-oss"
      to: "about",
      off: -80
    },
    {
      name: "Team",
      // link: "/om-oss"
      to: "staff",
      off: -80
    },
    {
      name: "Tjänster",
      // link: "/tjänster"
      to: "services",
      off: -80
    },
    {
      name: "Omdöme",
      // link: "/kontakt"
      to: "testimonials",
      off: -80
    },
    {
      name: "Kontakt",
      // link: "/kontakt"
      to: "contact",
      off: -80
    },
    {
      name: "Blogg",
      link: "/blogg",
      off: "0"
      // to: ""
    }
  ]);
  const [open, setOpen] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div ref={stickyRef} class="nav-wrapper">
      <nav className={sticky ? "nav sticky" : "nav"}>
        <h1 className="logo" onClick={scrollToTop}>
          LOGO
        </h1>
        <Hamburger open={open} setOpen={setOpen} />
        <Sidebar open={open} setOpen={setOpen} />
        <ul className="nav-links">
          {menu.map((item, index) => (
            <Link
              activeClass="active"
              to={item.to}
              spy={true}
              smooth={true}
              offset={item.off}
              duration={500}
            >
              {item.name}
            </Link>

            // <a
            //   key={index}
            //   href={item.link}
            //   className={active === item.link ? "link active" : "link"}
            // >
            //   {item.name}
            // </a>
          ))}
        </ul>
        <a href="/" className="client-btn">
          Klient
        </a>
      </nav>
    </div>
  );
};

export default Navbar;

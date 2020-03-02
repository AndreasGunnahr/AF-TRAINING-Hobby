import React, { useState } from "react";
import Hamburger from "Components/Global/Hamburger.jsx";
import Sidebar from "Components/Global/Sidebar.jsx";
// import { Link, animateScroll as scroll } from "react-scroll";
import "Styles/Global/navbar.scss";

const Navbar = ({ active }) => {
  const [menu, setMenu] = useState([
    {
      name: "Hem",
      link: "/"
      // to: ""
    },
    {
      name: "Om oss",
      link: "/om-oss"
      // to: "about"
    },
    {
      name: "Tjänster",
      link: "/tjänster"
      // to: "services"
    },
    {
      name: "Kontakt",
      link: "/kontakt"
      // to: "contact"
    },
    {
      name: "Blogg",
      link: "/blogg"
      // to: ""
    }
  ]);
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <h1 className="logo">LOGO</h1>
      <Hamburger open={open} setOpen={setOpen} />
      <Sidebar open={open} setOpen={setOpen} />
      <ul className="nav-links">
        {menu.map((item, index) => (
          // <Link
          //   // className="link"
          //   activeClass="active"
          //   to={item.to}
          //   spy={true}
          //   smooth={true}
          //   offset={0}
          //   duration={500}
          // >
          //   {item.name}
          // </Link>

          <a
            key={index}
            href={item.link}
            className={active === item.link ? "link active" : "link"}
          >
            {item.name}
          </a>
        ))}
      </ul>
      <a href="/" className="client-btn">
        Klient
      </a>
    </nav>
  );
};

export default Navbar;

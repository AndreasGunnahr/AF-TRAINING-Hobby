import React, { useState } from "react";
import Hamburger from "Components/Global/Hamburger.jsx";
import Sidebar from "Components/Global/Sidebar.jsx";
import "Styles/Global/navbar.scss";

const Navbar = ({ active }) => {
  const [menu, setMenu] = useState([
    {
      name: "Hem",
      link: "/"
    },
    {
      name: "Om oss",
      link: "/om-oss"
    },
    {
      name: "Tjänster",
      link: "/tjänster"
    },
    {
      name: "Blogg",
      link: "/blogg"
    },
    {
      name: "Kontakt",
      link: "/kontakt"
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

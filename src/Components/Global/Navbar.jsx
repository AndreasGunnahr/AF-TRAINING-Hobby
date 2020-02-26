import React, { useState } from "react";
import Hamburger from "Components/Global/Hamburger.jsx";
import Sidebar from "Components/Global/Sidebar.jsx";
import "Styles/Global/navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <h1 className="logo">LOGO</h1>
      <Hamburger open={open} setOpen={setOpen} />
      <Sidebar open={open} setOpen={setOpen} />
      <ul className="nav-links">
        <li className="link active">Hem</li>
        <li className="link">Om oss</li>
        <li className="link">Tjänster</li>
        <li className="link">Blogg</li>
        <li className="link">Kontakt</li>
      </ul>
      <a href="/" className="client-btn">
        Klient
      </a>
    </nav>
  );
};

export default Navbar;

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
`;

const Sidebar = ({ open }) => {
  return (
    <Container open={open} className="sidebar">
      <a href="/" className="sidebar-client-btn">
        Klient
      </a>
      <ul className="sidebar-menu">
        <li className="menu-link">Hem</li>
        <li className="menu-link">Om oss</li>
        <li className="menu-link">Tjänster</li>
        <li className="menu-link">Blogg</li>
        <li className="menu-link">Kontakt</li>
      </ul>
    </Container>
  );
};

export default Sidebar;

import React from "react";
import styled from "styled-components";

const Burger = styled.div`
  div {
    background: ${({ open }) => (open ? "#000000" : "#FAFAFA")};
    transition: all 0.3s linear;
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Hamburger = ({ open, setOpen }) => {
  return (
    <Burger open={open} className="hamburger" onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </Burger>
  );
};

export default Hamburger;

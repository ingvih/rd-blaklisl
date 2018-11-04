import React from "react";
import StyledHeader from "./StyledHeader";
import logo from "./logo.png";

export default function Header() {
  return (
    <StyledHeader>
      <img src={logo} alt="logo" />
      <h1>Blaklið Íslands</h1>
      <strong>Styrktaraðilar</strong>
      <p>Pálmatré S:5539313</p>
    </StyledHeader>
  );
}

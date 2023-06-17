import React from "react";
import "../style/style.css";
import Logo from "./Logo";
import Menu from "./Menu";


function Header() {
  return (
    <div className="display">
      <Logo/>
      <Menu/>
    </div>
  );
}

export default Header;

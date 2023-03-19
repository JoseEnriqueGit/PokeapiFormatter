import React from "react";
// Components
import Logo from "../../assets/Logo.png";

const Header = () => {
  return (
    <header className="bg-red-400 flex self-center items-center flex-col w-full p-4 gap-1">
      <img className="h-20" src={Logo} alt="Poke API logo" />
      <span>FORMATTER</span>
    </header>
  );
};

export default Header;

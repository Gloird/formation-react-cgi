import React, { FC } from "react";
import logo from "../../assets/svg/logo.svg";
import InputSearch from "../../components/InputSearch/inputSearch";

const Header: FC = () => {
  return (
    <header>
      <img id="logo" src={logo} alt="logo" />
      <div id="headerSearch">
        <InputSearch />
      </div>
    </header>
  );
};
export default Header;

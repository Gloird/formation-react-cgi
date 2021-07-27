import React, { FC } from "react";
import clap from "../../assets/svg/clap.svg";
import InputSearch from "../../components/InputSearch/inputSearch";

const Header: FC = () => {
  return (
    <header>
      <img id="clap" src={clap} alt="clap" />
      <div id="headerSearch">
        <InputSearch />
      </div>
    </header>
  );
};
export default Header;

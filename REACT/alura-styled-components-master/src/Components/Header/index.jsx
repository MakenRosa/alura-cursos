import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";

const Header = () => {
  return (
    <div className="header">
      <img className="logo-image" src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <a className="btn-secondary" href="https://google.com">
          Help
        </a>
        <a className="btn-primary" href="https://google.com">
          Quit
        </a>
      </div>
    </div>
  );
};

export default Header;

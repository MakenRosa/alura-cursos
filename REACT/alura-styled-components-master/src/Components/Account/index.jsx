import React, { useState } from "react";

import private_svg from "../../assets/images/private.svg";
import icon_eye from "../../assets/images/eye.svg";
import money from "../../assets/images/money.svg";

const Account = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <div className="box">
      <h2>Account</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Available balance{" "}
        <span>
          <img className="icon-image" src={money} alt="Balance icon" />
        </span>
        {toggleState ? (
          <div className="balance">
            <span className="detail">$</span> 0.00{" "}
          </div>
        ) : null}
      </div>

      <button className="btn" onClick={toggleHandler}>
        <img
          style={{ marginTop: "2px" }}
          className="icon-image"
          src={toggleState ? private_svg : icon_eye}
          alt="Balance privacy icon"
        />
      </button>
    </div>
  );
};

export default Account;

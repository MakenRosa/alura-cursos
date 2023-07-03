import React, { useState } from "react";
import styled from "styled-components";

import private_svg from "../../assets/images/private.svg";
import icon_eye from "../../assets/images/eye.svg";
import money from "../../assets/images/money.svg";
import { Icon, Box, Balance, Detail, Button, IconTheme} from "../UI";

const MarginIcon = styled(Icon)`
  margin-top: 2px;
`

const Account = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Account</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Available balance{" "}
        <span>
          <IconTheme src={money} alt="Balance icon" />
        </span>
        {toggleState ? (
          <Balance>
            <Detail>$</Detail> 0.00{" "}
          </Balance>
        ) : null}
      </div>

      <Button onClick={toggleHandler}>
        <MarginIcon
          src={toggleState ? private_svg : icon_eye}
          alt="Balance privacy icon"
        />
      </Button>
    </Box>
  );
};

export default Account;

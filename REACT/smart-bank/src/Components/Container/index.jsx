import React from "react";
import styled from "styled-components";

import Title from "../Title";
import Account from "../Account";
import Statement from "../Statement";

const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.body};
  min-height: 90vh;
  padding: 0px 15vw;
`

const Content = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${({ theme }) => theme.text};
  
  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const Container = () => {
  return (
    <StyledContainer>
      <Title>Hello John Doe!</Title>
      <Content>
        <Account />
        <Statement />
      </Content>
    </StyledContainer>
  );
};

export default Container;
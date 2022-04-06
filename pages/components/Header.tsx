import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <Title>Instagram Like</Title>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  width: 100%;
  background-color: red;
`;
const Title = styled.h1``;
// const Wrapper = styled.header``

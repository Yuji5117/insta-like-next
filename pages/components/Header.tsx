import React from "react";
import styled from "styled-components";
import MenuList from "./MenuList";

import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Instagram Like</Title>
        <SearchInput />
        <MenuList />
      </Container>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  background-color: red;
  width: 100%;
  height: 68px;
`;

const Container = styled.div`
  max-width: 680px;
  height: 68px;
  margin: 0 auto;
  background-color: blue;
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 24px;
`;

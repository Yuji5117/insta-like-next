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
  width: 100%;
  height: 68px;
  border-bottom: 1px solid #dbdbdb;
`;

const Container = styled.div`
  max-width: 680px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 24px;
`;

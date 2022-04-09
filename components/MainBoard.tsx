import React from "react";
import styled from "styled-components";
import PostCards from "./PostCards";

const MainBoard = () => {
  return (
    <Wrapper>
      <PostCards />
    </Wrapper>
  );
};

export default MainBoard;

const Wrapper = styled.div`
  max-width: 680px;
  margin: 0 auto;
`;

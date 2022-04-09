import React from "react";
import styled from "styled-components";
import PostCard from "./PostCard";

const PostCards = () => {
  return (
    <Wrapper>
      <PostCard />
    </Wrapper>
  );
};

export default PostCards;

const Wrapper = styled.div`
  width: 100%;
  padding: 30px 0;
`;

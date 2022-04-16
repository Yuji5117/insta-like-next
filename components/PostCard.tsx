import React from "react";
import styled from "styled-components";

import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import PostFooter from "./PostFooter";

interface PropsType {
  name: string;
  imgSrc: string;
  content: string;
}

const PostCard = ({ name, imgSrc, content }: PropsType) => {
  return (
    <Wrapper>
      <Header>
        <PostHeader name={name} />
      </Header>
      <Body>
        <PostImage imgSrc={imgSrc} />
      </Body>
      <Footer>
        <PostFooter content={content} />
      </Footer>
    </Wrapper>
  );
};

export default PostCard;

const Wrapper = styled.div`
  width: 100%;
  height: 680px;
  background-color: #ffffff;
  border: 1px solid #dbdbdb;
`;

const Header = styled.div`
  height: 60px;
  width: 95%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const Body = styled.div`
  height: 480px;
  border-top: 1px solid #f3f3f3;
  border-bottom: 1px solid #f3f3f3;
`;

const Footer = styled.div`
  height: 140px;
  width: 95%;
  margin: 0 auto;
`;

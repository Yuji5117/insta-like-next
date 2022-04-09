import React from "react";
import styled from "styled-components";

const PostCard = () => {
  return (
    <Wrapper>
      <Header>ヘッド</Header>
      <Body>
        <Image src="/test_image.png" alt="" />
      </Body>
      <Footer>フッター</Footer>
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
`;

const Body = styled.div`
  height: 480px;
`;

const Footer = styled.div`
  height: 140px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

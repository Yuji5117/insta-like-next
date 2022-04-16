import React from "react";
import styled from "styled-components";

interface PropsType {
  imgSrc: string;
}

const PostImage = ({ imgSrc }: PropsType) => {
  return (
    <>
      <Image src={imgSrc} alt="Post Image" />
    </>
  );
};

export default PostImage;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

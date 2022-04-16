import React from "react";
import styled from "styled-components";

interface PropsType {
  content: string;
}

const PostFooter = ({ content }: PropsType) => {
  return (
    <>
      <p>{content}</p>
    </>
  );
};

export default PostFooter;

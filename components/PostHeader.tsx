import React from "react";
import styled from "styled-components";

import Avator from "./Avator";

interface PropsType {
  name: string;
}

const PostHeader = ({ name }: PropsType) => {
  return (
    <>
      <Container>
        <div>
          <Avator />
        </div>
        <div>
          <p>{name}</p>
        </div>
      </Container>
    </>
  );
};

export default PostHeader;

const Container = styled.div`
  display: flex;

  & > * + * {
    padding-left: 10px;
  }
`;

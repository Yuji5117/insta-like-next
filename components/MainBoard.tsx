import React, { useState } from "react";
import styled from "styled-components";
import PostCards from "./PostCards";

import { GrAddCircle } from "react-icons/gr";

const MainBoard = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: "Yuji",
      imgSrc: "/test_image.png",
      content: "今日はいい一日だ！",
    },
    {
      id: 2,
      name: "Bob",
      imgSrc: "/test_image.png",
      content: "今日は最悪な一日だ！",
    },
  ]);

  return (
    <Wrapper>
      {/* <label htmlFor="">
        <AddButton></AddButton>
        <GrAddCircle></GrAddCircle>
      </label> */}
      <PostCards posts={posts} />
    </Wrapper>
  );
};

export default MainBoard;

const Wrapper = styled.div`
  max-width: 680px;
  margin: 0 auto;
`;

// const AddButton = styled.button`
//   display: none;
// `;

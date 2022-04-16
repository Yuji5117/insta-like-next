import React, { useState } from "react";
import styled from "styled-components";
import PostCard from "./PostCard";

interface Post {
  id: number;
  name: string;
  imgSrc: string;
  content: string;
}

interface PropTypes {
  posts: Post[];
}

const PostCards = ({ posts }: PropTypes) => {
  return (
    <>
      <ListContainer>
        {posts.map((post) => (
          <ListItem key={post.id}>
            <PostCard
              name={post.name}
              imgSrc={post.imgSrc}
              content={post.content}
            />
          </ListItem>
        ))}
      </ListContainer>
    </>
  );
};

export default PostCards;

const ListContainer = styled.ul`
  width: 100%;
  padding: 40px 0;

  & * + * {
    padding-top: 30px;
  }
`;

const ListItem = styled.li``;

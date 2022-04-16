import React from "react";

interface PropsType {
  name: string;
}

const PostHeader = ({ name }: PropsType) => {
  return (
    <>
      <p>Avater</p>
      <p>{name}</p>
    </>
  );
};

export default PostHeader;

import React from "react";

import { AiOutlineSelect } from "react-icons/ai";
import styled from "styled-components";

const MenuList = () => {
  return (
    <>
      <ItemList>
        <li>
          <AiOutlineSelect></AiOutlineSelect>
        </li>
        <li>
          <AiOutlineSelect></AiOutlineSelect>
        </li>
        <li>
          <AiOutlineSelect></AiOutlineSelect>
        </li>
      </ItemList>
    </>
  );
};

export default MenuList;

const ItemList = styled.ul`
  display: flex;

  & > * + * {
    padding-left: 10px;
  }
`;

const Item = styled.li``;

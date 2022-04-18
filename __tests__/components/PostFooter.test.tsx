import React from "react";
import { render, screen } from "@testing-library/react";

import PostFooter from "../../components/PostFooter";

describe("PostFooterコンポーネントのテスト", () => {
  test("contentが空だった場合", () => {
    render(<PostFooter content="" />);
    // 後で追加
  });
  test("contentが「これはテスト」だった場合", () => {
    // given
    render(<PostFooter content="これはテスト" />);

    // when
    const expectedContent = screen.getByText("これはテスト");

    // then
    expect(expectedContent).toBeInTheDocument();
  });
});

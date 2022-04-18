import React from "react";
import { render, screen } from "@testing-library/react";

import PostCards from "../../components/PostCards";

describe("PostCardsコンポーネントのテスト", () => {
  const posts = [
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
    {
      id: 3,
      name: "Mike",
      imgSrc: "/test_image.png",
      content: "今日は楽しい一日だ！",
    },
  ];
  test("postが3件の場合", () => {
    // given
    render(<PostCards posts={posts} />);

    // when
    const tesst = screen.getAllByRole("listitem");

    // then
    // expect(expectedContent).toBeInTheDocument();
  });
});

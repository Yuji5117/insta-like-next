# 学び

## Next.js で styled-components を使うと、css が当たらない問題

Console で Prop `className` did not match. というエラーが出ているを対処

- styled-components は className を使ってスタイリングしているため、サーバーとフロントで className が一致しないと怒られる

対処法

- `yarn add babel-plugin-styled-components` を実行
- `.babelrc`ファイルを作成し以下を記入

```
{
  "presets": ["next/babel"],
  "plugins": [["styled-components", { "ssr": true }]]
}

```

参考

https://zenn.dev/nbr41to/articles/c0c691653e3d55



## 最初の要素以外を指定するセレクタ = フクロウセレクタ
二番目以降の要素を指定することができる。つまり最初以外の要素を指定できる

使用用途
- ヘッダーのリストをスタイリングするとき

```
* + *{
   /* ここにスタイルを記述します */
}
```
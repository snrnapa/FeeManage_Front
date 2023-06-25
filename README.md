# FeeManage_Front

## console.log が二回呼ばれる

### 最優先でやること

React のデバッグを試す

### 可能性

- Orders.jsx が２回呼ばれている
  - useEffect がまだ完了していない状態で走ってしまっている
- useEffect がいつ呼ばれているかわからない => useEffect を２個作ることはできないか？
  - また、その時に、useState はいるのか？
- 意図せずに、ほかのところで orders を２回呼ぶようなことになってないか？

＊バック側は問題はなかった

## 使用してるフレームワーク

[Material UI](https://mui.com/material-ui/getting-started/overview/)

[Material UI のテンプレート](https://mui.com/material-ui/getting-started/templates/)

##　参考にしたサイト

Springboot×React
https://qiita.com/curry__30/items/c91d489551de68adb759

package.json

```
"proxy": "http://localhost:8080"
```

## React Effects についての無限レンダリングについて

- https://qiita.com/esoul/items/5ac4ae8260624dde135f
  - そもそもの fetch の書き方。今回、、[]を入れても解消しなかったのはそもそものかっこの書き方がおかしかったから
- https://qiita.com/wafuwafu13/items/0f4230a5301fb44dd796
  - よくある、Effect の無限レンダリングの解消について書いたもの

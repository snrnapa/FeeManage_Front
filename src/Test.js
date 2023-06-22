import React, { useState } from "react";
function Test() {
  const [text, setText] = useState("");

  /* ↓state変数「addText」を定義 */
  const [addText, setAddText] = useState("");

  /* ↓関数onClickAddTextを定義 */
  const onClickAddText = () => {
    setAddText(text);
    setText("");
    const sendPOST = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: text,
      }),
    };
    fetch("http://localhost:8080/", sendPOST);
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      {/* ↓buttonを追加 */}
      <button onClick={onClickAddText}>追加</button>

      {/* ↓pタグを追加 */}
      <p>ボタンクリック：{addText}</p>
    </div>
  );
}

export default Test;

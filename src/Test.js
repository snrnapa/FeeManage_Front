import React, { useState } from "react";
function Test() {
  const [text, setText] = useState([]);

  const handleChange = (e) => {
    // eventが発火したname属性名ごとに値を処理
    switch (e.target.name) {
      case "id":
        text.id = e.target.value;
        break;
      case "first_name":
        text.first_name = e.target.value;
        break;
      case "last_name":
        text.last_name = e.target.value;
        break;
      case "dept":
        text.dept = e.target.value;
        break;
      case "team":
        text.team = e.target.value;
        break;
    }
    setText(text);
  };
  /* ↓関数onClickAddTextを定義 */
  const onClickAddText = () => {
    setText("");
    const sendPOST = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: text.id,
        first_name: text.first_name,
        last_name: text.last_name,
        dept: text.dept,
        team: text.team,
      }),
    };
    fetch("http://localhost:8080/", sendPOST);
  };
  return (
    // <div>
    //   <input
    //     type="text"
    //     value={text}
    //     onChange={(event) => setText(event.target.value)}
    //   />

    //   {/* ↓buttonを追加 */}
    //   <button onClick={onClickAddText}>追加</button>

    //   {/* ↓pタグを追加 */}
    //   <p>ボタンクリック：{addText}</p>
    // </div>
    <>
      <form onSubmit={onClickAddText}>
        <label>id</label>
        <input
          type="Integer"
          name="id"
          value={text.id}
          onChange={handleChange}
        />

        <label htmlFor="first_name">first_name</label>
        <input
          type="text"
          name="first_name"
          value={text.first_name}
          onChange={handleChange}
        />

        <label htmlFor="last_name">last_name</label>
        <input
          type="text"
          name="last_name"
          value={text.last_name}
          onChange={handleChange}
        />

        <label htmlFor="dept">dept</label>
        <input
          type="text"
          name="dept"
          value={text.dept}
          onChange={handleChange}
        />

        <label htmlFor="team">team</label>
        <input
          type="text"
          name="team"
          value={text.team}
          onChange={handleChange}
        />
        <button type="submit" name="post">
          送信
        </button>
      </form>
    </>
  );
}

export default Test;

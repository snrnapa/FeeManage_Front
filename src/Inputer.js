import React from "react";

class Inputer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: "", first_name: "" };
    // this.state.first_name = { first_name: "" };
    this.requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state),
    };
  }

  handleChange = (e) => {
    // // ネストされたオブジェクトのdataまでアクセスしておく
    // const data = this.state.data;
    // eventが発火したname属性名ごとに値を処理
    switch (e.target.name) {
      case "id":
        this.state.id = e.target.value;
        break;
      case "first_name":
        this.state.first_name = e.target.value;
        break;
    }
    this.setState(this.state);
  };

  url = "http://localhost:8080/";
  useEffect() {
    fetch(this.url, this.requestOptions).then((res) =>
      res.json().then(console.log).catch(console.error)
    );
  }
  render() {
    return (
      <form onSubmit={this.requestOptions}>
        <label>お名前</label>
        <input
          type="text"
          name="id"
          value={this.state.id}
          onChange={this.handleChange}
        />

        <label htmlFor="first_name">メールアドレス</label>
        <input
          type="text"
          name="first_name"
          value={this.state.first_name}
          onChange={this.handleChange}
        />

        <button type="submit">送信</button>
      </form>
    );
  }
}

// const handleSubmit = () => {
//   console.log(this.state.data.id);
//   // console.log(this.state.data.first_name);
// };

export default Inputer;

import React from "react";

class TextBox extends React.Component {
  constructor(props) {
    super(props);
    console.log("pustim sa?");
  }

  render() {
    console.log("renedrujem?????");
    this.props.messages.forEach(element => {
      console.log(element);
    });
    const msgs = this.props.messages.map(e => (
      <div key={this.props.messages.indexOf(e)}>
        <h1>{e.name}</h1>
        <h2>{e.text}</h2>
      </div>
    ));

    return msgs;
  }
}

export default TextBox;

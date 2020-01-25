import React from "react";
import TextBox from "./TextBox";

class NameInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      messages: [],
      text: ""
    };
    this.nameHandler = this.nameHandler.bind(this);
    this.textHandle = this.textHandle.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler() {
    this.state.messages.push({
      name: this.state.name,
      text: this.state.text
    });
    this.setState({
      text: ""
    });
  }

  nameHandler(event) {
    this.setState({
      name: event.target.value
    });
  }

  textHandle(event) {
    this.setState({
      text: event.target.value
    });
  }
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={this.nameHandler}
          minLength="10"
        ></input>
        <input
          type="text"
          placeholder="Enter your message"
          value={this.state.text}
          onChange={this.textHandle}
          maxLength="100"
        ></input>
        <button
          type="submit"
          onClick={this.submitHandler}
          className="btn btn-primary"
        >
          Posli spravicku
        </button>

        <TextBox messages={this.state.messages} />
      </div>
    );
  }
}

export default NameInput;

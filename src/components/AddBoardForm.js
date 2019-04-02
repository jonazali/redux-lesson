import React, { Component } from "react";
import PropTypes from "prop-types";

export default class AddCardForm extends Component {
  static propTypes = {
    addBoard: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }

  render() {
    return <button onClick="handle"> Add a board</button>;
  }
}

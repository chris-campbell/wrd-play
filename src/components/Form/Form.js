import React, { Component } from "react";
import Input from "../Input/Input";
import "./Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.inputLetter = React.createRef();
    this.state = {
      // prettier-ignore
      words: [ "this", "friends", "group", "kind", "listen", "from", "have",
      "knew", "live", "name", "happy", "again", "learn", "night", "great",
      "four", "love", "most", "off", "people", "right", "mother", "watch",
      "where", "work", "what", "write", "walk" ],
      typedWord: []
    };
  }

  componentDidMount() {
    // Puts focus on first input element in form
    this.inputLetter.current.form.elements[0].focus();

    console.log(this.props.randomword);
  }

  // Handle forbidden keys from being pressed
  handleKeyPress = (index, e) => {
    // Forbidden key codes
    // prettier-ignore
    const FORBIDDENKEYS = [
      32, 37, 38, 39, 40, 48, 49, 50, 51, 52,
      53, 54, 55, 56, 57, 192, 219, 221, 220,
      188, 190, 191
    ];

    if (FORBIDDENKEYS.indexOf(e.keyCode) > -1) {
      e.preventDefault();
    }
  };

  // Gets input element of given index
  getInputElement = index => {
    return this.inputLetter.current.form.elements[index];
  };

  onKeyUpEvent = (index, e) => {
    let word = this.props.randomword;
    if (this.getInputElement(index).value.length === 1) {
      if (
        this.state.typedWord.join("") !== word &&
        this.state.typedWord.length < word.length
      ) {
        this.saveTypedLetter(index, word);
        this.nextFocus(index);
      }
    }
    this.deleteTypedLetter(e, index, word);
  };

  saveTypedLetter(index, word) {
    this.setState(
      {
        typedWord: [
          ...this.state.typedWord,
          ...this.getInputElement(index).value
        ]
      },
      () => {
        this.isSpellingCorrect(word, index);
      }
    );
  }

  deleteTypedLetter = (e, index, word) => {
    // Remove letter from input on delete
    // and focus on previous input
    if (e.keyCode === 8) {
      if (this.state.typedWord.join("") !== word) {
        this.state.typedWord.pop();
        this.prevFocus(index);
        this.setState({ typedWord: this.state.typedWord });
      }
    }
  };

  isSpellingCorrect = (word, index) => {
    if (this.state.typedWord.join("") === word) {
      this.getInputElement(index).blur();
      // Submit code
      alert("Correct, Great job!");
    }
  };

  prevFocus = index => {
    if (this.getInputElement(index - 1) !== undefined) {
      this.getInputElement(index - 1).focus();
    }
  };

  nextFocus = index => {
    if (this.getInputElement(index + 1) !== undefined) {
      this.getInputElement(index + 1).focus();
    }
  };

  // Generates Input components in Form component
  generateForm = word => {
    return (
      <div>
        <form id="word-input">
          {word.split("").map((letter, index) => (
            <Input
              forbiddenKeys={e => this.handleKeyPress(index, e)}
              moveFocusOver={e => this.onKeyUpEvent(index, e)}
              className="input-box"
              indexValue={index}
              ref={this.inputLetter}
            />
          ))}
        </form>
      </div>
    );
  };

  render() {
    return <div>{this.generateForm(this.props.randomword)}</div>;
  }
}

export default Form;

import React, { Component } from "react";
import Form from "../Form/Form";
import Headphone from "./img/headphone-trans.png";
import Next from "./img/next.png";
import Prev from "./img/prev.png";
import "./reset.css";
import "./normalize.css";
import "../Form/Form.css";
import Timer from "../Timer/Timer";

class Board extends React.Component {
  state = {
    // prettier-ignore
    words: [ "this", "friends", "group", "kind", "listen", "from", "have",
             "knew", "live", "name", "happy", "again", "learn", "night", "great",
             "four", "love", "most", "off", "people", "right", "mother", "watch",
             "where", "work", "what", "write", "walk" ]
  };

  randomWord = () => {
    var word = this.state.words[
      Math.floor(Math.random() * this.state.words.length)
    ];
    return word;
  };

  render() {
    const word = this.randomWord();
    return (
      <main id="trivia-outter">
        <section className="trivia-inner">
          <div className="prompt-clock-display">
            <div className="prompt-inner">
              <div className="prev">
                <img
                  alt="prev-button"
                  onClick={this.randomWord}
                  className="nxt-btn"
                  src={Prev}
                />
              </div>
              <img
                alt="headphone"
                onclick="playAudio()"
                className="headphone"
                src={Headphone}
              />
              <audio id="word-sound">
                <source src="" type="audio/mpeg" />
              </audio>
              <div className="next">
                <img alt="next-button" className="nxt-btn" src={Next} />
              </div>
              <Timer />
            </div>
          </div>
        </section>
        <Form randomword={word} />
      </main>
    );
  }
}

export default Board;

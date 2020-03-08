import React, { Component } from "react";
import Form from "../Form/Form";
import Headphone from "./img/headphone-trans.png";
import Next from "./img/next.png";
import Prev from "./img/prev.png";
import "./reset.css";
import "./normalize.css";
import "../Form/Form.css";

class Board extends Component {
  state = {};

  render() {
    return (
      <main id="trivia-outter">
        <section className="trivia-inner">
          <div className="prompt-clock-display">
            <div className="prompt-inner">
              <div className="prev">
                <img alt="prev-button" className="nxt-btn" src={Prev} />
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
              <span>00:15</span>
            </div>
          </div>
        </section>
        <Form />
      </main>
    );
  }
}

export default Board;

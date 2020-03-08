import React, { Component } from "react";

class NavBar extends Component {
  state = {};

  render() {
    return (
      <header>
        <nav className="nav">
          <a className="logo" href="#">
            Wrd Play
          </a>
          <label for="toggle">&#9776;</label>
          <input type="checkbox" id="toggle" />
          <div className="menu">
            <a href="#">Settings</a>
            <a href="#">Reset</a>
            <a href="#">Login</a>
            <a href="#">
              <span>Sign up</span>
            </a>
          </div>
        </nav>
      </header>
    );
  }
}

export default NavBar;

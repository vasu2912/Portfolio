import React, { Component } from "react";
import Link from "../img/link";
import Mail from "../img/mail";
import Repolink from "../img/repolink";
import "./main.css";

class Main extends Component {
  state = {};
  render() {
    return (
      <div class="main">
        <div class="name">
          <h1 class="text">vasu k</h1>
        </div>
        <div class="details">
          <p id="fill" class="card">
            Student. Tech Enthusiast.
          </p>
          <p id="fill" class="card">
            I.T Engineer.
          </p>
          <p id="fill" class="card">
            Telangana, India.
          </p>
          <p id="fill" class="links">
            <a href="https://github.com/vasu2912">
              Github <Link />
            </a>
            .
            <a href="https://twitter.com/vasukandagatla">
              Twitter <Link />
            </a>
            .
            <a href="https://www.instagram.com/vasu_kandagatla/">
              Instagram <Link />
            </a>
            .
          </p>
        </div>
        <footer class="footer">
          <p>
            &copy;{new Date().getFullYear()} Vasu Kandagatla.
            <a class="footerlink" href="https://github.com/vasu2912/portfolio">
              Repository <Repolink />
            </a>
          </p>
        </footer>
        <div class="emailfooter">
          <a href="mailto:vasu.kandagatla@gmail.com" class="emaillink">
            <button class="button">
              Mail Me &nbsp;
              <Mail />
            </button>
          </a>
        </div>
      </div>
    );
  }
}

export default Main;

import React from "react";
import logo from "./css/github.svg";
import logo2 from "./css/linkedin.svg";
import "./css/contect.css";
function Contect() {
  return (
    <div className="container">
      <h1 className="heading-contact">contect me here</h1>
      <div className="form">
        <form>
          <label htmlFor="email">eamil:</label>
          <input type="email" name="email" id="email" />
          <br />
          <br />
          <label htmlFor="work">message:</label>
          <textarea name="work" id="text1" cols="20" rows="5"></textarea>
          <br/>
          <input type="button" value="send" />
        </form>
      </div>

      <span>
        <h4 className="heading2">to see my work and projects</h4>
        <a href="https://github.com/Jp8125">
          <img src={logo} alt="Bootstrap" width="32" height="32"></img>
        </a>{" "}
      </span>
      <h4 className="heading3">connect me on linkedin</h4>
      <a href="https://www.linkedin.com/in/jay-prajapati-b8217b23b">
        <img src={logo2} alt="Bootstrap" width="32" height="32"></img>
      </a>
    </div>
  );
}

export default Contect;

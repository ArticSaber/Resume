import React from "react";
import "./App.css";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GrHomeRounded } from "react-icons/gr";
function App() {
  return (
    <div className="maincontainer">
      <div className="container">
        <hr className="line" size="10" />
        <div className="heading">KAARTHIKEYAN S</div>
        <div className="heading">B.E (CSE)</div>
        <hr className="line" size="10" />
        <div className="box">
          <div className="left">
            <div className="contact">
              CONTACT
              <div className="phone contact-item">
                <BsTelephone className="icon" /> 8072920907
              </div>
              <div className="mail contact-item">
                <AiOutlineMail className="icon" /> kaarthiknirmala@gmail.com
              </div>
              <div className="address contact-item">
                <GrHomeRounded className="icon" /> No.114, Flat E, Chendur
                Castle, Kattupakkam, Chennai – 600 056.
              </div>
            </div>
          </div>

          <div className="right">
            <div className="obj">
              OBJECTIVE
              <div className="myobj">
                A motivated individual with in-depth knowledge of languages and
                development tools, seeking a position in a growth-oriented
                company where I can use my skills to the advantage of the
                company while having the scope to develop my own skills.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

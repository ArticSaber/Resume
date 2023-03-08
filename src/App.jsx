import React from "react";
import "./App.css";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GrHomeRounded } from "react-icons/gr";
import { TbPoint } from "react-icons/Tb";
import photo from "./assets/image.jpeg";


function App() {
  // const blob = document.getElementById("blob");
  
  // window.onpointermove = (e) => {
  //   const { clientX, clientY } = e;
  
  //   blob.animate(
  //     {
  //       left: `${clientX}px`,
  //       top: `${clientY}px`,
  //     },
  //     { duration: 3000, fill: "forwards" }
  //   );
  // };
  return (
    <div className="App">
      {/* <div id="blob"></div>
      <div className="blur"> */}
      <div className="blur">
        <div className="container">
          <hr className="line" size="10" />
          <div className="heading">
            {/* <img
            src={photo}
            alt="image"
          className="image" /> */}
            <div className="head">
              <span>KAARTHIKEYAN S</span>
              <span>B.E (CSE)</span>
            </div>
          </div>
          <hr className="line" size="10" />
          <div className="box">
            <div className="left">
              <div className="contact">
                CONTACT
                <div className="contact-item">
                  <BsTelephone className="icon" />
                  8072920907
                </div>
                <div className="contact-item">
                  <AiOutlineMail className="icon" />
                  kaarthiknirmala@gmail.com
                </div>
                <div className="contact-item">
                  <GrHomeRounded className="icon" /> No.114, Flat E, Chendur
                  Castle, Kattupakkam, Chennai – 600 056.
                </div>
              </div>
              <div className="skills">
                TECHNICAL SKILLS
                <ul>
                  <li>C</li>
                  <li>Python</li>
                  <li>HTML</li>
                  <li>ReactJS</li>
                  <li>CSS</li>
                </ul>
              </div>
            </div>

            <div className="right">
              <div className="obj">
                OBJECTIVE
                <div className="myobj">
                  A motivated individual with in-depth knowledge of languages
                  and development tools, seeking a position in a growth-oriented
                  company where I can use my skills to the advantage of the
                  company while having the scope to develop my own skills.
                </div>
              </div>
              <div className="edu ">
                EDUCATIONAL QUALIFICATIONS
                <div className="educont">
                  <TbPoint className="icon" /> 2020 - 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import { BsTelephone, BsInstagram } from "react-icons/bs";
import { AiOutlineMail, AiFillInstagram } from "react-icons/ai";
import { GrHomeRounded } from "react-icons/gr";
import { TbCircleDotted, TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin } from "react-icons/sl";
import photo from "./assets/image.jpeg";

function App() {
  const blob = document.getElementById("blob");

  window.onpointermove = (e) => {
    const { clientX, clientY } = e;

    blob.animate(
      {
        left: `${clientX}px`,
        top: `${clientY}px`,
      },
      { duration: 3000, fill: "forwards" }
    );
  };
  return (
    <div className="App">
      <div className="container">
        <hr className="line" size="10" />
        <div className="heading">
          {/* <img
            src={photo}
            alt="image"
          className="image" /> */}
          <div className="head">
            <span style={{ fontWeight: "bold" }}>KAARTHIKEYAN S</span>
            <span style={{ fontWeight: "bold" }}>B.E (CSE)</span>
          </div>
        </div>
        <hr className="line" size="10" />
        <div className="box">
          <div className="left">
            <div className="contact">
              <span style={{ fontWeight: "bold" }}>CONTACT</span>
              <div className="contact-item">
                <BsTelephone />
                8072920907
              </div>
              <div className="contact-item">
                <AiOutlineMail />
                kaarthiknirmala@gmail.com
              </div>
              <div className="contact-item">
                <GrHomeRounded /> No.114, Flat E, Chendur Castle, Kattupakkam,
                Chennai – 600 056.
              </div>
            </div>
            <div className="skills">
              <span style={{ fontWeight: "bold" }}>TECHNICAL SKILLS</span>
              <ul className="table">
                <li>C </li>
                <li>Python</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>ReactJS</li>
              </ul>
            </div>
            <div>
              <span style={{ fontWeight: "bold" }}>HOBBIES</span>
              <div className="hobby-content">
                <ul className="table">
                  <li>Travelling</li>
                  <li>Chess</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="obj">
              <span style={{ fontWeight: "bold" }}>OBJECTIVE</span>
              <div className="myobj">
                A motivated individual with in-depth knowledge of languages and
                development tools, seeking a position in a growth-oriented
                company where I can use my skills to the advantage of the
                company while having the scope to develop my own skills.
              </div>
            </div>
            <div className="edu">
              <span style={{ fontWeight: "bold" }}>
                EDUCATIONAL QUALIFICATIONS
              </span>
              <div className="educont">
                <TbCircleDotted size={20} /> 2020 - 2024 <br />
                Saveetha Engineering College B.E (CSE) - III Year
              </div>
              <div className="educont">
                <TbCircleDotted size={20} /> 2020 <br />
                The National IT International School XII std
              </div>
              <div className="educont">
                <TbCircleDotted size={20} /> 2018 <br />
                The National IT International School X Std
              </div>
            </div>
            <div className="pp">
              <span style={{ fontWeight: "bold" }}>PAPERS PUBLISHED</span>
              <ul className="pp-cont table">
                <li>
                  Published a Research Paper titled “Improving the Performance
                  of SoC’s with Ecosystem Based Artificial Intelligence and
                  Enhanced Thermal and Power Management.”
                  <br />
                  <br />
                  <a
                    style={{ fontWeight: "bold" }}
                    id="a"
                    href="https://ieeexplore.ieee.org/document/10028943"
                  >
                    https://ieeexplore.ieee.org/document/10028943
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="socials">
          <a href="https://github.com/ArticSaber">
            {/* <GoMarkGithub className="soc" size={35} /> */}
            <TbBrandGithub className="soc" size={35} />
          </a>
          <a href="https://www.linkedin.com/in/kaarthik-s/">
            <SlSocialLinkedin className="soc" size={35} />
          </a>
          <a href="https://www.instagram.com/the__epic__hero/">
            <BsInstagram className="soc" size={35} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

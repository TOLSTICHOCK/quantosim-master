import React from "react";
import "../home/home.css";
import video1 from "../home/video1.mp4";

const Home = () => {
  return (
    <>
      <div className="buttons-header">
        <a className="button-header" href="/circuit" target="_blank">
          {" "}
          Схема{" "}
        </a>
        <a
          className="button-header"
          href="/lectures/quantum_bit"
          target="_blank"
        >
          Теория
        </a>
        <a className="button-header" href="/home" target="_blank">
          Практика
        </a>
      </div>
      <div className="div-home">
        <div className="title">Web-лаборатория по квантовым вычислениям</div>
        <div className="text">
          Эмулятор квантового компьютера для школьников, студентов и начинающих
          специалистов. Открой для себя мир квантовых вычислений
        </div>
        <div className="buttons-home">
          <a className="button" href="/circuit" target="_blank">
            Открыть схему
          </a>
          <a
            className="button theory"
            href="/lectures/quantum_bit"
            target="_blank"
          >
            Перейти к теории
          </a>
        </div>
      </div>
      <div className="video-content">
        <video src={video1} autoPlay loop muted />
      </div>
    </>
  );
};

export default Home;

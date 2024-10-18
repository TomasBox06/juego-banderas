import { useEffect, useState } from "react";

import ale from "../assets/easy/ale.png";
import arg from "../assets/easy/arg.jpg";
import bra from "../assets/easy/bra.png";
import can from "../assets/easy/can.png";
import col from "../assets/easy/col.png";
import grb from "../assets/easy/grb.png";
import mex from "../assets/easy/mex.png";
import per from "../assets/easy/per.png";
import por from "../assets/easy/por.png";
import uru from "../assets/easy/uru.png";
import usa from "../assets/easy/usa.png";
import ven from "../assets/easy/ven.png";
import par from "../assets/easy/par.png";
import ita from "../assets/easy/ita.png";
import esp from "../assets/easy/esp.png";
import fra from "../assets/easy/fra.png";
import ecu from "../assets/easy/ecu.png";
import chi from "../assets/easy/chi.png";
import bol from "../assets/easy/bol.png";

import alb from "../assets/medium/alb.png";
import and from "../assets/medium/and.png";
import ara from "../assets/medium/ara.png";
import aze from "../assets/medium/aze.png";
import aus from "../assets/medium/aus.png";
import bel from "../assets/medium/bel.png";
import arm from "../assets/medium/arm.png";
import belg from "../assets/medium/belg.png";
import bie from "../assets/medium/bie.png";
import bul from "../assets/medium/bul.png";
import corn from "../assets/medium/corn.png";
import cors from "../assets/medium/cors.png";
import china from "../assets/medium/chi.png";
import bos from "../assets/medium/bos.png";
import cos from "../assets/medium/cos.png";
import cro from "../assets/medium/cro.png";
import din from "../assets/medium/din.png";
import esc from "../assets/medium/esc.png";
import esl from "../assets/medium/esl.png";
import eslo from "../assets/medium/eslo.png";
import est from "../assets/medium/est.png";
import fin from "../assets/medium/fin.png";
import gal from "../assets/medium/gal.png";
import geo from "../assets/medium/geo.png";
import gre from "../assets/medium/gre.png";
import gua from "../assets/medium/gua.png";
import guy from "../assets/medium/guy.png";
import hon from "../assets/medium/hon.png";
import hun from "../assets/medium/hun.png";
import ing from "../assets/medium/ing.png";

import alg from "../assets/hard/alg.png";
import ang from "../assets/hard/ang.png";
import ban from "../assets/hard/ban.png";
import ben from "../assets/hard/ben.png";
import bot from "../assets/hard/bot.png";
import bur from "../assets/hard/bur.png";
import buru from "../assets/hard/buru.png";
import cam from "../assets/hard/cam.png";
import cap from "../assets/hard/cap.png";
import cen from "../assets/hard/cen.png";
import com from "../assets/hard/com.png";
import cot from "../assets/hard/cot.png";
import dem from "../assets/hard/dem.png";
import egy from "../assets/hard/egy.png";
import eth from "../assets/hard/eth.png";
import fij from "../assets/hard/fij.png";
import gab from "../assets/hard/gab.png";
import gha from "../assets/hard/gha.png";
import kuw from "../assets/hard/kuw.png";
import kyr from "../assets/hard/kyr.png";
import jor from "../assets/hard/jor.png";
import mal from "../assets/hard/mal.png";
import mor from "../assets/hard/mor.png";
import moz from "../assets/hard/moz.png";
import nau from "../assets/hard/nau.png";
import nep from "../assets/hard/nep.png";

export default function Flags() {
  let [data, setData] = useState(null);

  fetch("http://localhost:3000/0")
    .then((response) => response.json())
    .then((data) => {
      setData(data);
    })
    .catch((error) => console.error("Error:", error));

  const [game, setGame] = useState(true);
  let [score, setScore] = useState(0);
  let [finalScore, setFinalScore] = useState(0);
  let [wrongButton, setWrongButton] = useState(null);

  let [level, setLevel] = useState(0);
  let [level2, setLevel2] = useState(0);
  let [level3, setLevel3] = useState(0);
  let [level4, setLevel4] = useState(0);

  let [play, setPlay] = useState(false);
  let [modal, setModal] = useState(false);

  let [startButton, setStartButton] = useState("EMPEZAR");

  let [correct, setCorrect] = useState(false);
  let [correct2, setCorrect2] = useState(false);
  let [correct3, setCorrect3] = useState(false);
  let [correct4, setCorrect4] = useState(false);

  let [isDisabled, setIsDisabled] = useState(false);

  const [newFlag, setNewFlag] = useState(null);
  const [newFlag2, setNewFlag2] = useState(null);
  const [newFlag3, setNewFlag3] = useState(null);
  const [newFlag4, setNewFlag4] = useState(null);

  let [button1, setButton1] = useState(null);
  let [button2, setButton2] = useState(null);
  let [button3, setButton3] = useState(null);
  let [button4, setButton4] = useState(null);

  const randomizeFlags = () => {
    let randomIndex = Math.floor(Math.random() * data.length);
    let randomIndex2 = Math.floor(Math.random() * data.length);
    let randomIndex3 = Math.floor(Math.random() * data.length);
    let randomIndex4 = Math.floor(Math.random() * data.length);

    const newFlag = data[randomIndex];
    const newFlag2 = data[randomIndex2];
    const newFlag3 = data[randomIndex3];
    const newFlag4 = data[randomIndex4];

    setNewFlag(newFlag);

    const randomIndexButtons = Math.floor(Math.random() * 4);
    if (randomIndexButtons === 0) {
      setButton1(newFlag.name);
      setButton2(newFlag2.name);
      setButton3(newFlag3.name);
      setButton4(newFlag4.name);
    } else if (randomIndexButtons === 1) {
      setButton2(newFlag.name);
      setButton1(newFlag2.name);
      setButton3(newFlag3.name);
      setButton4(newFlag4.name);
    } else if (randomIndexButtons === 2) {
      setButton3(newFlag.name);
      setButton1(newFlag2.name);
      setButton2(newFlag3.name);
      setButton4(newFlag4.name);
    } else {
      setButton4(newFlag.name);
      setButton1(newFlag2.name);
      setButton2(newFlag3.name);
      setButton3(newFlag4.name);
    }
    setPlay(true);
    if (level <= 3) {
      setStartButton("SIGUIENTE");
      setModal(false);
    } else if (level === 4) {
      setStartButton("RESULTADOS");
    } else if (level === 5) {
      setModal(true);
      setFinalScore(score);
      setLevel(0);
      setScore(0);
    }
    setIsDisabled(false);
  };

  const checkButton1 = () => {
    if (button1 == newFlag.name) {
      setCorrect(true);
      setCorrect2(false);
      setCorrect3(false);
      setCorrect4(false);
      setWrongButton(null); // Reset wrong button state
      setLevel((level) => level + 1);
      setScore((score) => score + 1);
    } else {
      setWrongButton(1); // Mark this button as wrong
      setLevel((level) => level + 1);
      setCorrect(false);
    }
    setIsDisabled(true);
    setPlay(false);
  };
  const checkButton2 = () => {
    if (button2 == newFlag.name) {
      setCorrect(false);
      setCorrect2(true);
      setCorrect3(false);
      setCorrect4(false);
      setWrongButton(null); // Reset wrong button state
      setScore((score) => score + 1);
      setLevel((level) => level + 1);
    } else {
      setWrongButton(2); // Mark this button as wrong
      setLevel((level) => level + 1);
      setCorrect2(false);
    }
    setIsDisabled(true);
    setPlay(false);
  };
  const checkButton3 = () => {
    if (button3 == newFlag.name) {
      setCorrect(false);
      setCorrect2(false);
      setCorrect3(true);
      setCorrect4(false);
      setWrongButton(null); // Reset wrong button state
      setScore((score) => score + 1);
      setLevel((level) => level + 1);
    } else {
      setWrongButton(3); // Mark this button as wrong
      setLevel((level) => level + 1);
      setCorrect3(false);
    }
    setIsDisabled(true);
    setPlay(false);
  };
  const checkButton4 = () => {
    if (button4 == newFlag.name) {
      setCorrect(false);
      setCorrect2(false);
      setCorrect3(false);
      setCorrect4(true);
      setWrongButton(null); // Reset wrong button state
      setScore((score) => score + 1);
      setLevel((level) => level + 1);
    } else {
      setWrongButton(4); // Mark this button as wrong
      setLevel((level) => level + 1);
      setCorrect4(false);
      setIsDisabled(true);
    }
    setPlay(false);
  };

  return (
    <>
      <header className="header-container">
        <div className="header">
          <p>Puntuación: {score}</p>
          <p>{level}/5</p>
        </div>
        <div className={play ? "header-line--animation" : "header-line"}></div>
      </header>
      <div className="flags-container">
        <div className="flags">
          {newFlag && <img src={newFlag.flag} alt="country flag" />}
        </div>
      </div>
      <div className="guess">
        <button
          className={`${correct ? "guess-correct" : ""} ${
            wrongButton === 1 ? "guess-wrong" : ""
          } guess-button`}
          onClick={checkButton1}
        >
          {button1}
        </button>
        <button
          className={`${correct2 ? "guess-correct" : ""} ${
            wrongButton === 2 ? "guess-wrong" : ""
          } guess-button`}
          onClick={checkButton2}
        >
          {button2}
        </button>
        <button
          className={`${correct3 ? "guess-correct" : ""} ${
            wrongButton === 3 ? "guess-wrong" : ""
          } guess-button`}
          onClick={checkButton3}
        >
          {button3}
        </button>
        <button
          className={`${correct4 ? "guess-correct" : ""} ${
            wrongButton === 4 ? "guess-wrong" : ""
          } guess-button`}
          onClick={checkButton4}
        >
          {button4}
        </button>
        {!play && (
          <button className="guess-start" onClick={randomizeFlags}>
            {startButton}
          </button>
        )}
      </div>
      {modal && (
        <div className="modal-container">
          <p>Resultado Final</p>
          <h2>{finalScore}</h2>
          <button onClick={randomizeFlags} className="guess-button">
            Reiniciar
          </button>
        </div>
      )}
    </>
  );
}

import { useEffect, useState } from "react";

export default function Flags() {
  let [data, setData] = useState(null);

  fetch("http://localhost:3000/0")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
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

    console.log(newFlag2);
    setNewFlag(newFlag);

    const randomIndexButtons = Math.floor(Math.random() * 4);
    if (randomIndexButtons === 0) {
      setButton1(newFlag.translations.es);
      setButton2(newFlag2.translations.es);
      setButton3(newFlag3.translations.es);
      setButton4(newFlag4.translations.es);
    } else if (randomIndexButtons === 1) {
      setButton2(newFlag.translations.es);
      setButton1(newFlag2.translations.es);
      setButton3(newFlag3.translations.es);
      setButton4(newFlag4.translations.es);
    } else if (randomIndexButtons === 2) {
      setButton3(newFlag.translations.es);
      setButton1(newFlag2.translations.es);
      setButton2(newFlag3.translations.es);
      setButton4(newFlag4.translations.es);
    } else {
      setButton4(newFlag.translations.es);
      setButton1(newFlag2.translations.es);
      setButton2(newFlag3.translations.es);
      setButton3(newFlag4.translations.es);
    }
    setPlay(true);
    if (level <= 8) {
      setStartButton("SIGUIENTE");
      setModal(false);
    } else if (level === 9) {
      setStartButton("RESULTADOS");
    } else if (level === 10) {
      setModal(true);
      setFinalScore(score);
      setLevel(0);
      setScore(0);
    }
    setIsDisabled(false);
  };

  const checkButton1 = () => {
    if (button1 == newFlag.translations.es) {
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
    if (button2 == newFlag.translations.es) {
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
    if (button3 == newFlag.translations.es) {
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
    if (button4 == newFlag.translations.es) {
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
      <div className="container">
        <header className="header-container">
          <div className="header">
            <p>Puntuación: {score}</p>
            <p>{level}/10</p>
          </div>
          <div
            className={play ? "header-line--animation" : "header-line"}
          ></div>
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

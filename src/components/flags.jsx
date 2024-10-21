import { useEffect, useState } from "react";
import Rules from "./rules";

export default function Flags() {
  let [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/0")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const [game, setGame] = useState(true);
  let [score, setScore] = useState(0);
  let [finalScore, setFinalScore] = useState(0);
  let [wrongButton, setWrongButton] = useState(null);
  let [correctButtonIndex, setCorrectButtonIndex] = useState(null); // Nueva variable para almacenar el botón correcto

  let [level, setLevel] = useState(0);
  let [play, setPlay] = useState(false);
  let [modal, setModal] = useState(false);
  let [startButton, setStartButton] = useState("EMPEZAR");
  let [isDisabled, setIsDisabled] = useState(false);

  const [newFlag, setNewFlag] = useState(null);

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
    setCorrectButtonIndex(randomIndexButtons); // Guardar el índice correcto

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
    if (button1 === newFlag.translations.es) {
      setCorrectButtonIndex(0); // Marcar este botón como el correcto
      setWrongButton(null);
      setScore((score) => score + 1);
    } else {
      setCorrectButtonIndex(correctButtonIndex); // Marcar el correcto
      setWrongButton(1); // Marcar este botón como incorrecto
    }
    setLevel((level) => level + 1);
    setIsDisabled(true);
    setPlay(false);
  };

  const checkButton2 = () => {
    if (button2 === newFlag.translations.es) {
      setCorrectButtonIndex(1);
      setWrongButton(null);
      setScore((score) => score + 1);
    } else {
      setCorrectButtonIndex(correctButtonIndex);
      setWrongButton(2);
    }
    setLevel((level) => level + 1);
    setIsDisabled(true);
    setPlay(false);
  };

  const checkButton3 = () => {
    if (button3 === newFlag.translations.es) {
      setCorrectButtonIndex(2);
      setWrongButton(null);
      setScore((score) => score + 1);
    } else {
      setCorrectButtonIndex(correctButtonIndex);
      setWrongButton(3);
    }
    setLevel((level) => level + 1);
    setIsDisabled(true);
    setPlay(false);
  };

  const checkButton4 = () => {
    if (button4 === newFlag.translations.es) {
      setCorrectButtonIndex(3);
      setWrongButton(null);
      setScore((score) => score + 1);
    } else {
      setCorrectButtonIndex(correctButtonIndex);
      setWrongButton(4);
    }
    setLevel((level) => level + 1);
    setIsDisabled(true);
    setPlay(false);
  };

  return (
    <div className="flex-body">
      <div className="rules">
        <div className="rules-stats"></div>
        <div className="rules-text"></div>
      </div>

      <div className="container">
        <header className="header-container">
          <div className="header">
            <p>Puntuación: {score}</p>
            <p>
              {level}/{10}
            </p>
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
            className={`${correctButtonIndex === 0 ? "guess-correct" : ""} ${
              wrongButton === 1 ? "guess-wrong" : ""
            } guess-button`}
            onClick={checkButton1}
            disabled={isDisabled}
          >
            {button1}
          </button>
          <button
            className={`${correctButtonIndex === 1 ? "guess-correct" : ""} ${
              wrongButton === 2 ? "guess-wrong" : ""
            } guess-button`}
            onClick={checkButton2}
            disabled={isDisabled}
          >
            {button2}
          </button>
          <button
            className={`${correctButtonIndex === 2 ? "guess-correct" : ""} ${
              wrongButton === 3 ? "guess-wrong" : ""
            } guess-button`}
            onClick={checkButton3}
            disabled={isDisabled}
          >
            {button3}
          </button>
          <button
            className={`${correctButtonIndex === 3 ? "guess-correct" : ""} ${
              wrongButton === 4 ? "guess-wrong" : ""
            } guess-button`}
            onClick={checkButton4}
            disabled={isDisabled}
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
    </div>
  );
}

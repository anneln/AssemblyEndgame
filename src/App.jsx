import { useState } from "react";
import { languages } from "./languages.js";
import { clsx } from "clsx";

export default function App() {
  const words = languages.map((lang) => lang.name.toLowerCase());
  const [winningGame, setwinningGame] = useState("You win");
  const [currentWord, setCurrentWord] = useState(
    () => words[Math.floor(Math.random() * words.length)],
  );
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const [guessLetter, setGuessLetter] = useState([]);
  const wrongletters = guessLetter.filter(
    (letter) => !currentWord.includes(letter),
  );
  const wrongGuessCount = wrongletters.length;
  console.log(wrongGuessCount);

  function handleLetter(letter) {
    wrongGuessCount < languages.length &&
      setGuessLetter((prevLetters) =>
        prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter],
      );
  }

  const keyboardEls = alphabet.split("").map((keyboardEl) => {
    const isGuessed = guessLetter.includes(keyboardEl);
    const isWrong = isGuessed && !currentWord.includes(keyboardEl);
    return (
      <button
        onClick={() => handleLetter(keyboardEl)}
        key={keyboardEl}
        className={clsx("alphabet", { guessed: isGuessed, wrong: isWrong })}
      >
        {keyboardEl.toUpperCase()}
      </button>
    );
  });

  function wordToLetters() {
    return currentWord.split("").map((letter, index) => {
      return (
        <span key={index} className="letters">
          {guessLetter.includes(letter) ? letter.toUpperCase() : ""}
        </span>
      );
    });
  }

  function start() {
    setGuessLetter([]);
    setCurrentWord(words[Math.floor(Math.random() * words.length)]);
  }

  function displayLanguage() {
    const chips = languages.map((language, index) => {
      const styles = {
        backgroundColor: language.backgroundColor,
        color: language.color,
      };
      return (
        <span
          className={clsx("chips", { lost: index < wrongGuessCount })}
          style={styles}
          key={language.name}
        >
          {language.name}
        </span>
      );
    });
    return chips;
  }
  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p className="description">
          Guess the word within 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      <section className="game-status">
        <h2>{winningGame}</h2>
        <p className="alert-message">Well done</p>
      </section>
      <section className="language-chips">{displayLanguage()}</section>
      <section className="letters-container">{wordToLetters()}</section>
      <section className="keyboard">{keyboardEls}</section>
      {wrongGuessCount >= languages.length && (
        <button className="new-game" onClick={start}>
          New Game
        </button>
      )}
    </main>
  );
}

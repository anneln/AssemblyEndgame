import { useState } from "react";
import { languages } from "./languages.js";
import { clsx } from "clsx";
import { getFarewellText } from "./utils.js";

export default function App() {
  const words = languages.map((lang) => lang.name.toLowerCase());

  const [currentWord, setCurrentWord] = useState(
    () => words[Math.floor(Math.random() * words.length)],
  );

  const [guessLetter, setGuessLetter] = useState([]);

  const isGameWon = currentWord
    .split("")
    .every((letter) => guessLetter.includes(letter));

  const wrongletters = guessLetter.filter(
    (letter) => !currentWord.includes(letter),
  );

  const wrongGuessCount = wrongletters.length;
  const currentFarewellLanguage = languages[wrongGuessCount - 1];
  const lastGuessLetter = guessLetter[guessLetter.length - 1];
  const isLastAnswerWrong =
    wrongGuessCount > 0 && !currentWord.includes(lastGuessLetter);

  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameOver = isGameLost || isGameWon;

  const isLastGuessIncorrect =
    lastGuessLetter && !currentWord.includes(lastGuessLetter);

  const gameStatus = isGameWon ? (
    <div>
      <h2>You win!</h2>
      <p>Well done! 🎉</p>
    </div>
  ) : isGameLost ? (
    <div>
      <h2>Game Over</h2>
      <p>You lose! Better start learning Assembly 😭</p>
    </div>
  ) : isLastAnswerWrong ? (
    <div>
      <p>{getFarewellText(currentFarewellLanguage.name)}</p>
    </div>
  ) : null;

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function handleLetter(letter) {
    !isGameOver &&
      setGuessLetter((prevLetters) =>
        prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter],
      );
  }

  const revealWordIfLost = currentWord.split("").map((letter, index) => (
    <span
      key={index}
      className={clsx(
        "revealLetter",
        guessLetter.includes(letter) && "classic",
      )}
    >
      {letter.toUpperCase()}
    </span>
  ));

  const keyboardEls = alphabet.split("").map((keyboardEl) => {
    const isGuessed = guessLetter.includes(keyboardEl);
    const isWrong = isGuessed && !currentWord.includes(keyboardEl);
    return (
      <button
        onClick={() => handleLetter(keyboardEl)}
        key={keyboardEl}
        className={clsx("alphabet", { guessed: isGuessed, wrong: isWrong })}
        disabled={isGameOver}
      >
        {keyboardEl.toUpperCase()}
      </button>
    );
  });

  function wordToLetters() {
    return currentWord.split("").map((letter, index) => {
      {
        !isGameLost ? keyboardEls : revealWordIfLost;
      }
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
      <section
        className={clsx("game-status", {
          win: isGameWon,
          lose: isGameLost,
          message: !isGameOver && isLastGuessIncorrect,
        })}
      >
        {gameStatus}
      </section>
      <section className="language-chips">{displayLanguage()}</section>
      <section className="letters-container">
        {isGameLost ? revealWordIfLost : wordToLetters()}
      </section>
      <section className="keyboard">{keyboardEls}</section>
      {isGameOver && (
        <button className="new-game" onClick={start}>
          New Game
        </button>
      )}
    </main>
  );
}

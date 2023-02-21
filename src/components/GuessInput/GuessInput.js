import React from "react";

function GuessInput({ guessesList, isWinner, setGuessesList }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (guess.length !== 5) {
      window.alert("Please enter exactly 5 characters. 💖");
      return;
    }

    console.log({ guess });

    setGuessesList([...guessesList, guess]);
    setGuess("");
  }

  return (
    <form
      onSubmit={(event) => handleSubmit(event)}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        disable={isWinner}
        required
        minLength={5}
        maxLength={5}
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;

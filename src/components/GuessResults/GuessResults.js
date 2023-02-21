import React from "react";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
function GuessResults({ guesses, answer, setIsWinner }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((index) => {
        return (
          <Guess
            key={index}
            word={guesses[index]}
            answer={answer}
            setIsWinner={setIsWinner}
          />
        );
      })}
    </div>
  );
}

export default GuessResults;

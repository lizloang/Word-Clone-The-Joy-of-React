import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ word, answer, setIsWinner }) {
  const statusLetter = checkGuess(word, answer);
  let correct = 0;
  return (
    <p className="guess">
      {range(0, 5).map((index) => {
        const status = statusLetter ? statusLetter[index].status : undefined;
        if (status === "correct") correct++;
        if (correct === 5) setIsWinner(true);
        return (
          <span className={"cell " + status} key={index}>
            {word ? word[index] : ""}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;

import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import Banner from "../Banner";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessesList, setGuessesList] = React.useState([]);
  const [isWinner, setIsWinner] = React.useState("running");

  let result;
  if (guessesList.length > 5) {
    result = <Banner result={"sad"} answer={answer} />;
    setIsWinner("loser");
  }

  if (isWinner === "winner") {
    result = <Banner result={"happy"} guessesList={guessesList} />;
  }
  return (
    <>
      {result}
      <GuessResults
        guesses={guessesList}
        answer={answer}
        setIsWinner={setIsWinner}
      />
      <GuessInput
        guessesList={guessesList}
        isWinner={isWinner}
        setGuessesList={setGuessesList}
      />
    </>
  );
}

export default Game;

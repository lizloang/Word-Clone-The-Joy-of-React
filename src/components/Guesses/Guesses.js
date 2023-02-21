import React from "react";

function Guesses({ guessesList }) {
  return (
    <div className="guess-results">
      {guessesList.map((guess, index) => {
        return (
          <p className="guess" key={index}>
            {guess}
          </p>
        );
      })}
    </div>
  );
}

export default Guesses;

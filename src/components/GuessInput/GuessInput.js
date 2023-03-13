import React from "react";

function GuessInput({ handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    handleSubmitGuess(tentativeGuess);

    setTentativeGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit} >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
        maxLength={5}
        minLength={5}
        pattern="[a-zA-Z]{5}"
        required
        title="5 letter word"
        type="text"
        value={tentativeGuess}
      />
    </form>
  );
}

export default GuessInput;

import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState('');
  function handleSubmit(event) {
    event.preventDefault();
    console.log({guess});
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit} >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase())
        }}
        maxLength={5}
        minLength={5}
        pattern="[a-zA-Z]{5}"
        required
        title="5 letter word"
        type="text"
        value={guess}
      />
    </form>
  );
}

export default GuessInput;

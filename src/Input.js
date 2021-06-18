import React from "react";
import languageContext from "./contexts/languageContext";
import stringsModule from "./helpers/strings";

const Input = ({ success, secretWord }) => {
  const language = React.useContext(languageContext);
  const [currentGuess, setCurrentGuess] = React.useState("");

  if (success) {
    return <div data-test="component-input" />;
  }

  return (
    <div
      data-test="component-input"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder={stringsModule.getStringByLanguage(
            language,
            "guessInputPlaceholder"
          )}
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value)}
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          onClick={(e) => {
            e.preventDefault();
            setCurrentGuess("");
          }}
        >
          {stringsModule.getStringByLanguage(
            language,
            "submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default Input;

import React from "react";
import languageContext from './contexts/languageContext'
import stringModule from './helpers/strings'

const GuessedWords = (props) => {
  const language = React.useContext(languageContext);
  let contents;
  if (props.guessedWords.length === 0) {
    contents = (
      <span data-test="guess-instructions">
        {stringModule.getStringByLanguage(language,'guessPrompt')}
      </span>
    );
  } else {
    const guessedWordsRows = props.guessedWords.map((word, index) => (
      <tr data-test="guessed-word" key={index}>
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ));
    contents = (
      <div data-test="guessed-words"  >
        <h3 className="col-md-12">
          {stringModule.getStringByLanguage(language,'guessedWords')}
        </h3>
        <table className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th scope="col">{stringModule.getStringByLanguage(language,'guessColumnHeader')}</th>
              <th scope="col">{stringModule.getStringByLanguage(language,'matchingLettersColumnHeader')}</th>
            </tr>
          </thead>
          <tbody>{guessedWordsRows}</tbody>
        </table>
      </div>
    );
  }
  return <div data-test="component-guessed-words">{contents}</div>;
};

export default GuessedWords;

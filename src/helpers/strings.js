const languageStrings = {
  en: {
    congrats: "Congratulations! You guessed the word!",
    submit: "Submit",
    guessPrompt: "Try to guess the secret word!",
    guessInputPlaceholder: "enter guess",
    guessColumnHeader: "Guessed Words",
    guessedWords: "Guesses",
    matchingLettersColumnHeader: "Matching Letters",
  },
  emoji: {
    congrats: "🎯🎉",
    submit: "🚀",
    guessPrompt: "🤔🤐🔤",
    guessInputPlaceholder: "⌨🤔",
    guessColumnHeader: "🤷‍♀️🔤",
    guessedWords: "🤷‍♀️",
    matchingLettersColumnHeader: "✅",
  },
  es: {
    congrats: "Enhorabuena! Has adivinado la palabra!",
    submit: "Enviar",
    guessPrompt: "Intenta adivinar la palabra!",
    guessInputPlaceholder: "Escribe una palabra",
    guessColumnHeader: "Palabras fallidas",
    guessedWords: "Intentos",
    matchingLettersColumnHeader: "Letras correctas",
  },
};

function getStringByLanguage(
  languageCode,
  stringKey,
  strings = languageStrings
) {
  if (!strings[languageCode] || !strings[languageCode][stringKey]) {
      console.warn(`Could not get string [${stringKey}] for [${languageCode}]`)
    //fallback to english keys
    return strings.en[stringKey];
  }
  return strings[languageCode][stringKey]
}

//future mocking
export default {
  getStringByLanguage,
};

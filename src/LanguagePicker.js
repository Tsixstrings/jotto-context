import React from "react";

function LanguagePicker({ setLanguage }) {
  const languages = [
    { code: "en", symbol: "🤠" },
    { code: "emoji", symbol: "😊" },
    { code: "es", symbol: "💃" },
  ];

  const languageIcons = languages.map((lang) => (
    <span
      data-test="language-icon"
      key={lang.code}
      onClick={() => setLanguage(lang.code)}
      style={{cursor: "pointer"}}
    >
      {lang.symbol}
    </span>
  ));
  return <div data-test="component-language-picker">{languageIcons}</div>;
}

export default LanguagePicker;

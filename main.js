import { ENGLISH_TO_MORSE_TRANSLATE, MORSE_TO_ENGLISH_TRANSLATE } from "./script.js";

const inputEl = document.getElementById("input");
const outputEl = document.getElementById("output");
const toMorseBtn = document.getElementById("toMorse");
const toEnglishBtn = document.getElementById("toEnglish");

toMorseBtn.addEventListener("click", () => {
  try {
    outputEl.textContent = ENGLISH_TO_MORSE_TRANSLATE(inputEl.value);
  } catch (err) {
    outputEl.textContent = err.message;
  }
});

toEnglishBtn.addEventListener("click", () => {
  try {
    outputEl.textContent = MORSE_TO_ENGLISH_TRANSLATE(inputEl.value);
  } catch (err) {
    outputEl.textContent = err.message;
  }
});

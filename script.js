// Default language is English
let currentLang = "en";

function switchLang(lang) {
  currentLang = lang;

  const enElements = document.querySelectorAll(".lang-en");
  const esElements = document.querySelectorAll(".lang-es");

  if (lang === "en") {
    enElements.forEach((el) => (el.style.display = ""));
    esElements.forEach((el) => (el.style.display = "none"));
  } else {
    enElements.forEach((el) => (el.style.display = "none"));
    esElements.forEach((el) => (el.style.display = ""));
  }
}

// On page load — enforce default language
window.onload = () => {
  switchLang("en");
};

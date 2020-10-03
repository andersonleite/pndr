import fullpage from 'fullpage.js'
import Translator from "./translator";
var i18n = require("./i18n/translation.js");

// load fullPage.js
var fullPageInstance = new fullpage('#fullpage', {
  licenseKey: '4DE177FC-0AFC45BD-B70D5540-7C513D8C',
  navigation: true,
  sectionsColor:['#fff', '#fff', '#fff', '#fff']
});

// load i18n/translations
var translator = new Translator({
  persist: false,
  languages: ["en", "pt"],
  defaultLanguage: "en",
  detectLanguage: true,
  filesLocation: "/i18n"
});

translator.load();

window.onload = function (){
  translator.load(navigator.language);
}

// document.querySelector("form").addEventListener("click", function(evt) {
//   if (evt.target.tagName === "INPUT") {
//     translator.load(evt.target.value);
//   }
// });

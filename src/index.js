import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import { I18nextProvider } from "react-i18next";
import { initReactI18next } from 'react-i18next';
import i18next from "i18next";
import uaLocale from "./locales/ua.json";
import deLocale from "./locales/de.json";

i18next
.use(initReactI18next)
.init({
  interpolation: { escapeValue: false },
  fallbackLng: localStorage.getItem("selectedLanguage") || "de",  
  resources: {
    de: {
      translation: deLocale,
    },
    ua: {
      translation: uaLocale,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

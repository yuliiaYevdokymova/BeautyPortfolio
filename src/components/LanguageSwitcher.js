import React, {useEffect} from "react";
import { useTranslation } from "react-i18next";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";

const LanguageSwitcher = () => {
  const languageStorageKey = "selectedLanguage";
  const language = localStorage.getItem(languageStorageKey);
  const { t, i18n } = useTranslation(); 
  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
    localStorage.setItem(languageStorageKey, newLang);
    document.title = t("Title");  
  };

  useEffect(() => {
    i18n.changeLanguage(language);  
    document.title = t("Title");    
  }, []);

  const LanguageMenuItem = styled(MenuItem)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center"
  });

  return (
    <TextField
      select
      size="small"    
      value={language}      
      onChange={handleLanguageChange}
    >
      <LanguageMenuItem value="de">
        <span style={{ marginRight: 5 }}>DE</span>
        <img src={require("../assests/images/germany.png")} />
      </LanguageMenuItem>

      <LanguageMenuItem value="ua">
        <span style={{ marginRight: 5 }}>UA</span>
        <img src={require("../assests/images/ukraine.png")} />
      </LanguageMenuItem>
    </TextField>
  );
};

export default LanguageSwitcher;

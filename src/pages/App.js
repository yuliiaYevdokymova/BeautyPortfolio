import LanguageSwitcher from "../components/LanguageSwitcher";
import * as React from "react";
import "../styles/App.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import StartWithMainGallery from "../components/StartWithMainGallery";
import Greeting from "../components/Greeting";
import Makeup from "../components/Makeup";
import LightMakeup from "../components/LightMakeup";
import HardMakeup from "../components/HardMakeup";
import WeddingMakeup from "../components/WeddingMakeup";
import EyeBrowsAndLashesIntro from "../components/EyeBrowsAndLashesIntro";
import EyeBrowsAndLashes from "../components/EyeBrowsAndLashes";
import PermanentEyeBrowsIntro from "../components/PermanentEyeBrowsIntro";
import PermanentEyeBrows from "../components/PermanentEyeBrows";
import About from "../components/About";
import Contacts from "../components/Contacts";

function App() {
  const { t } = useTranslation();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)"); 
  const theme = React.useMemo(() => {
    let theme = createTheme({
      palette: {
        mode: prefersDarkMode ? "dark" : "light",
      },
      typography: {
        fontFamily: "Marcellus, serif",
        fontSize: 16,
      },
    });
    theme = responsiveFontSizes(theme);
    return theme;
  }, [prefersDarkMode]);

  useEffect(() => {
    document.title = t("Title");
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />

      <Box sx={{ position: "absolute", top: 5, right: 5 }}>
        <LanguageSwitcher />
      </Box>     
     
      <Greeting />

      <StartWithMainGallery />    

      <Grid sx={{ mb: 2 }}>
        {/* <Typography
          textAlign="center"
          sx={{ mr: 2, ml: 2 }}
          alignSelf="center"
          variant="h5"
        >
          {t("MyServices")}
        </Typography> */}

        <Typography alignSelf="flex-start" sx={{ ml: 3 }} variant="h5">
          {t("Makeup")}
        </Typography>
      </Grid>

      <Makeup />

      <LightMakeup />

      <HardMakeup />

      <WeddingMakeup />

      <Typography alignSelf="flex-start" sx={{ ml: 3, mb: 2 }} variant="h5">
        {t("EyeBrowsAndLashes")}
      </Typography>

      <EyeBrowsAndLashesIntro />

      <EyeBrowsAndLashes />

      <Typography alignSelf="flex-start" sx={{ ml: 3, mb: 2 }} variant="h5">
        {t("PermanentBrows")}
      </Typography>

      <PermanentEyeBrowsIntro />

      <PermanentEyeBrows />
      
      <About />

      <Contacts />
    </ThemeProvider>
  );
}

export default App;

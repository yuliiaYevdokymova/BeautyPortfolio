import LanguageSwitcher from "../components/LanguageSwitcher";
import * as React from "react";
import "../styles/App.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import { Container, Typography } from "@mui/material";
import getMainGalleryImages from "../components/MainGalleryImages";

function App() {
  const { t } = useTranslation();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = React.useMemo(() => {
    return createTheme({
      palette: {
        mode: prefersDarkMode ? "dark" : "light",
      },
      typography: {
        fontFamily: "Marcellus, serif",
      },
    });
  }, [prefersDarkMode]);

  useEffect(() => {
    document.title = t("Title");
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="flex-end"
          justify="flex-start"
          style={{ marginTop: 15, marginRight: 30 }}
        >
          <LanguageSwitcher />
        </Grid>

        <Grid
          item
          container
          direction="column"
          justify="center"
          textAlign="center"
          alignSelf="center"
        >
          <Header />
          <Box
            sx={{
              width: "35vw",
              display: "flex",
              alignSelf: "center",
              maxWidth: "500px",
              minWidth: "200px",
            }}
          >
            <Gallery images={getMainGalleryImages()} />
          </Box>
        </Grid>

        <Grid
          item
          container
          direction="column"
          justify="center"
          alignSelf="center"
          textAlign="center"
        >
          <Typography variant="h4"> {t("AllServices")} </Typography>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;

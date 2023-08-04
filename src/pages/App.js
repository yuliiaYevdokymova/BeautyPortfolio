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
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import { Container, Typography } from "@mui/material";
import getMainGalleryImages from "../functions/MainImages";
import getLightMakeupGalleryImages from "../functions/LightMakeupmages";
import getHardMakeupGalleryImages from "../functions/HardMakeupImages";
import getWeddingMakeupImages from "../functions/WeddingMakeupImages";
import getEyeBrowsGalleryImages from "../functions/EyeBrowsImages";
import getEyeLashesGalleryImages from "../functions/EyeLashesImages";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  const { t } = useTranslation();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const alignCenter = { display: "flex", alignItems: "center" };
  const theme = React.useMemo(() => {
    let theme = createTheme({
      palette: {
        mode: prefersDarkMode ? "dark" : "light",
      },
      typography: {
        fontFamily: "Marcellus, serif",
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

      <div className="background" />   

      <Parallax pages={8}>
        <ParallaxLayer offset={0} speed={0.5}>
          <Grid
            container
            sx={{ mr: 2, ml: 2, mt: 2 }}
            direction="column"
            justify="center"
            textAlign="center"
            alignSelf="center"
          >
            <Header />
            <Box
              sx={{
                display: "flex",
                alignSelf: "center",
                marginTop: 2,
                width: "40vh",
                maxWidth: "90vw",
              }}
            >
              <Gallery images={getMainGalleryImages()} />
            </Box>

            <Typography justify="center" sx={{ marginTop: 2 }} variant="h5">
              {t("AllServices")}
            </Typography>
          </Grid>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <Grid
            container
            sx={{ mr: 2, ml: 2, mt: 2 }}
            direction="column"
            justify="center"
            textAlign="center"
            alignSelf="center"
          >
            <Typography> {t("GreetingPart1")} </Typography>
            <Typography> {t("GreetingPart2")} </Typography>

            <Box
              sx={{
                alignSelf: "center",
                marginTop: 2,
                width: "50vh",
                maxWidth: "90vw",
                minWidth: "250px",
              }}
              component="img"
              src={require("../assests/images/GreetingPhoto.jpg")}
            />
          </Grid>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <Grid
            container
            sx={{ mr: 2, ml: 2, mt: 2 }}
            direction="column"
            justify="center"
            textAlign="center"
            alignSelf="center"
          >
            <Typography justify="center" variant="h5">
              {t("MyServices")}
            </Typography>

            <Typography alignSelf="flex-start" variant="h5">
              {t("Makeup")}
            </Typography>

            <Grid item container alignSelf="flex-start">
              <Box
                sx={{
                  marginTop: 2,
                  width: "50vh",
                  maxWidth: "90vw",
                  minWidth: "250px",
                }}
                component="img"
                src={require("../assests/images/makeupMainPhoto.PNG")}
              />

              <Typography>{t("MakeupMainText")}</Typography>
            </Grid>
          </Grid>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <Grid
            container
            sx={{ mr: 2, ml: 2, mt: 2 }}
            direction="column"
            justify="center"
            textAlign="center"
            alignSelf="center"
          >
            <Typography alignSelf="flex-start" variant="h5">
              {t("LightMakeup")}
            </Typography>

            <Typography alignSelf="flex-start">
              {t("LightMakeupText")}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignSelf: "center",
                marginTop: 2,
                width: "30vh",
                maxWidth: "90vw",
              }}
            >
              <Gallery images={getLightMakeupGalleryImages()} />
            </Box>
          </Grid>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <Grid
            container
            sx={{ mr: 2, ml: 2, mt: 2 }}
            direction="column"
            justify="center"
            textAlign="center"
            alignSelf="center"
          >
            <Typography alignSelf="flex-start" variant="h5">
              {t("HardMakeup")}
            </Typography>

            <Typography alignSelf="flex-start">
              {t("HardMakeupText")}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignSelf: "center",
                marginTop: 2,
                width: "30vh",
                maxWidth: "90vw",
              }}
            >
              <Gallery images={getHardMakeupGalleryImages()} />
            </Box>
          </Grid>
        </ParallaxLayer>

        <ParallaxLayer
          offset={5}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <Grid
            container
            sx={{ mr: 2, ml: 2, mt: 2 }}
            direction="column"
            justify="center"
            textAlign="center"
            alignSelf="center"
          >
            <Typography alignSelf="flex-start" variant="h5">
              {t("WeddingMakeup")}
            </Typography>

            <Typography alignSelf="flex-start">
              {t("WeddingMakeupText")}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignSelf: "center",
                marginTop: 2,
                width: "30vh",
                maxWidth: "90vw",
              }}
            >
              <Gallery images={getWeddingMakeupImages()} />
            </Box>
          </Grid>
        </ParallaxLayer>

        <ParallaxLayer
          offset={6}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <Grid
            container
            sx={{ mr: 2, ml: 2, mt: 2 }}
            direction="column"
            justify="center"
            textAlign="center"
            alignSelf="center"
          >
            <Typography alignSelf="flex-start" variant="h5">
              {t("EyeBrowsAndLashes")}
            </Typography>

            <Grid item container alignSelf="flex-start">
              <Box
                sx={{
                  marginTop: 2,
                  width: "50vh",
                  maxWidth: "90vw",
                  minWidth: "250px",
                }}
                component="img"
                src={require("../assests/images/MainBrowsAndLashesImage.jpg")}
              />

              <Typography>{t("EyeBrowsAndLashesText")}</Typography>
            </Grid>

            <Typography alignSelf="flex-start">{t("EyeBrowsText")}</Typography>

            <Box
              sx={{
                display: "flex",
                alignSelf: "center",
                marginTop: 2,
                width: "30vh",
                maxWidth: "90vw",
              }}
            >
              <Gallery images={getEyeBrowsGalleryImages()} />
            </Box>

            <Typography alignSelf="flex-start">{t("EyeLashesText")}</Typography>

            <Box
              sx={{
                display: "flex",
                alignSelf: "center",
                marginTop: 2,
                width: "30vh",
                maxWidth: "90vw",
              }}
            >
              <Gallery images={getEyeLashesGalleryImages()} />
            </Box>

            <Typography alignSelf="flex-start" variant="h5">
              {t("PermanentBrows")}
            </Typography>

            <Grid item container alignSelf="flex-start">
              <Box
                sx={{
                  marginTop: 2,
                  width: "50vh",
                  maxWidth: "90vw",
                  minWidth: "250px",
                }}
                component="img"
                src={require("../assests/images/PermanentMainPhoto.PNG")}
              />

              <Typography>{t("PermanentBrowsTextPart1")}</Typography>
            </Grid>

            <Typography>{t("PermanentBrowsTextPart2")}</Typography>

            <Box
              sx={{
                display: "flex",
                alignSelf: "center",
                marginTop: 2,
                width: "30vh",
                maxWidth: "90vw",
              }}
            >
              <Gallery images={getEyeBrowsGalleryImages()} />
            </Box>
          </Grid>
        </ParallaxLayer>

        <ParallaxLayer
          offset={7}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <Grid
            container
            sx={{ mr: 2, ml: 2, mt: 2 }}
            direction="column"
            justify="center"
            textAlign="center"
            alignSelf="center"
          >
            <Typography justify="center" sx={{ marginTop: 2 }} variant="h5">
              {t("AboutMe")}
            </Typography>

            <Typography alignSelf="flex-start">{t("AboutMeText")}</Typography>

            <Typography justify="center" sx={{ marginTop: 2 }} variant="h5">
              {t("Contacts")}
            </Typography>

            <Typography justify="center" sx={{ marginTop: 2 }} variant="h5">
              {t("FollowMe")}
            </Typography>
          </Grid>
        </ParallaxLayer>
      </Parallax>

      <Grid style={{ position: "absolute", top: 5, right: 20 }}>
        <LanguageSwitcher style={{ marginTop: 10 }} />
      </Grid>
    </ThemeProvider>
  );
}

export default App;

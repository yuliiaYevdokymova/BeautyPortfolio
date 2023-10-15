import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Grid, Typography, Container, useMediaQuery } from "@mui/material";
import "../styles/Greeting.css";
import Header from "./Header";
import PhotoWithTextUnder from "./PhotoWithTextUnder";
import GreetingPhoto from "../assests/images/GreetingPhoto.jpg";

const Greeting = () => {
  const { t } = useTranslation();
  const isSmallerThanMedium = useMediaQuery((theme) =>
  theme.breakpoints.down("md")
);

  return (
    <Grid
      direction="column"
      container
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: 2,
      }}
    >
      <Header />

      {!isSmallerThanMedium ? (
        <Grid container item id="backgroundImage">
          <Container
            xs={12}
            md={6}
            item
            sx={{
              display: "flex",
              textAlign: "center",
              alignSelf: "center",
              mb: 2,
            }}
          >
            <Box>
              <Typography sx={{ width: "100%" }}>
                {t("GreetingPart1")}
              </Typography>
              <Typography sx={{ width: "100%" }}>
                {t("GreetingPart2")}
              </Typography>
            </Box>
          </Container>

          <Grid
            md={6}
            item
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></Grid>
        </Grid>
      ) : (
        <PhotoWithTextUnder image={GreetingPhoto} text={`Hello, ${t("GreetingPart1")} ${t("GreetingPart2")}`} />
      )}
    </Grid>
  );
};

export default Greeting;

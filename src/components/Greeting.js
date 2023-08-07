import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Grid, Typography, Container } from "@mui/material";
import Header from "./Header";

const Greeting = () => {
  const { t } = useTranslation();

  return (
    <Grid
      direction="column"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: 2,
      }}
    >
      <Header />
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",          
        }}
      >
        <Container
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            textAlign: "center",
            alignSelf: "center",
            mb: 2,
          }}
        >
          <Typography sx={{ width: "100%" }}>
            {t("GreetingPart1")}{" "}
            <Typography sx={{ width: "100%" }}>
              {" "}
              {t("GreetingPart2")}{" "}
            </Typography>
          </Typography>
        </Container>

        <Grid
          sm={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: "75%",
              height: "auto",
              maxHeight: "70vh",
            }}
            component="img"
            src={require("../assests/images/GreetingPhoto.jpg")}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Greeting;

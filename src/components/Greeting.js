import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Grid, Typography, Container } from "@mui/material";

const Greeting = () => {
  const { t } = useTranslation();

  return (
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
        }}
      >
        <Typography sx={{ width: "100%" }}>
          {t("GreetingPart1")}{" "}
          <Typography sx={{ width: "100%" }}> {t("GreetingPart2")} </Typography>
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
            maxHeight: "80vh",
          }}
          component="img"
          src={require("../assests/images/GreetingPhoto.jpg")}
        />
      </Grid>
    </Grid>
  );
};

export default Greeting;

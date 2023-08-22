import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Grid, Typography, Container } from "@mui/material";
import greetingPhoto from "../assests/images/GreetingPhoto.jpg";
import Header from "./Header";

const Greeting = () => {
  const { t } = useTranslation();

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

      <Grid
        container
        item
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 2,
          backgroundImage: `url(${greetingPhoto})`,
          backgroundPosition: "0% 20%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          minHeight: "75vh",
        }}
      >
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
    </Grid>
  );
};

export default Greeting;

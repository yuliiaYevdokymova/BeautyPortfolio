import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Grid, Typography, Container } from "@mui/material";

const About = () => {
  const { t } = useTranslation();

  return (
    <Grid
      container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb:2
      }}
    >
      <Grid
        xs={12}
        md={6}
        sx={{          
          display: "flex",
          textAlign: "center",
          alignSelf: "center",
          mb:2
        }}
      >
        <Typography sx={{ width: "100%" }}>{t("AboutMeText")}</Typography>
      </Grid>

      <Grid
        md={6}
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
          src={require("../assests/images/AboutMe.PNG")}
        />
      </Grid>
    </Grid>
  );
};

export default About;

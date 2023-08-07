import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Grid, Typography, Container } from "@mui/material";

const About = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Grid sx={{ mb: 2 }}>
        <Typography textAlign="center" alignSelf="center" variant="h5">
          {t("AboutMe")}
        </Typography>
      </Grid>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2,
        }}
      >
        <Grid
          xs={12}
          md={6}
          sx={{
            display: "flex",
            textAlign: "center",
            alignSelf: "center",
            mb: 2,
          }}
        >
          <Typography sx={{ width: "100%", ml:2, mr: 2 }}>{t("AboutMeText")}</Typography>
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
    </Box>
  );
};

export default About;

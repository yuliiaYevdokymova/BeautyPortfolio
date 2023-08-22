import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Grid, Typography, Container } from "@mui/material";

const PermanentEyeBrowsIntro = () => {
  const { t } = useTranslation();

  return (
    <Grid
      container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: 5,
      }}
    >
      <Grid
        md={6}
        item
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 5,
        }}
      >
        <Box
          sx={{
            maxWidth: "75%",
            height: "auto",
            maxHeight: "80vh",
          }}
          component="img"
          src={require("../assests/images/PermanentMainPhoto.PNG")}
        />
      </Grid>

      <Container
        xs={12}
        item
        md={6}
        sx={{
          display: "flex",
          textAlign: "center",
          alignSelf: "center",
        }}
      >       
          <Typography sx={{ width: "100%", mr: 2 }}>
            {t("PermanentBrowsIntroText")}
          </Typography>       
      </Container>
    </Grid>
  );
};

export default PermanentEyeBrowsIntro;

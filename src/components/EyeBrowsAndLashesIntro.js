import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Grid, Typography, Container } from "@mui/material";

const EyeBrowsAndLashesIntro = () => {
  const { t } = useTranslation();

  return (
    <Grid
      container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb:2,       
      }}
    >
    
      <Grid
        sm={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb:2
        }}
      >
        <Box
          sx={{
            maxWidth: "75%",
            height: "auto",
            maxHeight: "80vh",
          }}
          component="img"
          src={require("../assests/images/MainBrowsAndLashesImage.jpg")}
        />
      </Grid>

      <Grid
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          textAlign: "center",
          alignSelf: "center",
        }}
      >
        <Typography sx={{ width: "100%",   mr:2     }}>
          {t("EyeBrowsAndLashesText")}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default EyeBrowsAndLashesIntro;

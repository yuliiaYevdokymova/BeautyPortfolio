import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Grid, Typography } from "@mui/material";
import getMainGalleryImages from "../functions/MainImages";
import HorizontalGallery from "./HorizontalGallery";
const StartWithMainGallery = () => {
  const { t } = useTranslation();

  return (
    <Grid
      container
      sx={{ mb: 2 }}
      direction="column"
      justify="center"
      textAlign="center"
      alignSelf="center"
    >
      <Typography justify="center" sx={{ marginTop: 2 }} variant="h5">
        {t("AllServices")}
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignSelf: "center",
          marginTop: 2,
          width: "95%",
        }}
      >
        <HorizontalGallery
          images={getMainGalleryImages()}
          dynamicBullets={true}
        />
      </Box>
    </Grid>
  );
};

export default StartWithMainGallery;

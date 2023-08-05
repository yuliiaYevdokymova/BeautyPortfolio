import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Grid, Typography } from "@mui/material";
import Header from "../components/Header";
import ImageGallery from "react-image-gallery";
import getMainGalleryImages from "../functions/MainImages";


const StartWithMainGallery = () => {
  const { t } = useTranslation();  

  return (
    <Grid
        container
        sx={{ minHeight: "100vh", mb:2}}
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
            width: "45vh",
            maxWidth: "90vw",
          }}
        >
          <ImageGallery
            items={getMainGalleryImages()}
            showPlayButton={false}
            showThumbnails={false}
            showBullets={true}
            swipeThreshold="20"
            lazyLoad={true}
          />
        </Box>

        <Typography justify="center" sx={{ marginTop: 2 }} variant="h5">
          {t("AllServices")}
        </Typography>
      </Grid>
  );
};

export default StartWithMainGallery;

import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Grid, Typography } from "@mui/material";
import ImageGallery from "react-image-gallery";
import getMainGalleryImages from "../functions/MainImages";


const StartWithMainGallery = () => {
  const { t } = useTranslation();  

  return (
    <Grid
        container
        sx={{ mb:2}}
        direction="column"
        justify="center"
        textAlign="center"
        alignSelf="center"
      >      

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
          />
        </Box>

        <Typography justify="center" sx={{ marginTop: 2 }} variant="h5">
          {t("AllServices")}
        </Typography>
      </Grid>
  );
};

export default StartWithMainGallery;

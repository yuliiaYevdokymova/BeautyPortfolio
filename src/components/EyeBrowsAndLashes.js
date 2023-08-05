import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Grid, Typography, Container } from "@mui/material";
import getEyeBrowsGalleryImages from "../functions/EyeBrowsImages";
import getEyeLashesGalleryImages from "../functions/EyeLashesImages";
import ImageGallery from "react-image-gallery";

const EyeBrowsAndLashes = () => {
  const { t } = useTranslation();

  return (
    <Grid sx={{mb:2}}>
      <Grid
        container
        direction="column"
        justify="center"
        textAlign="center"
        alignSelf="center"
      >
        <Container>
          <Typography alignSelf="flex-start">{t("EyeBrowsText")}</Typography>
        </Container>

        <Box
          sx={{
            display: "flex",
            alignSelf: "center",
            marginTop: 2,
            width: "45vh",
            maxWidth: "90vw",
            mb:2
          }}
        >
          <ImageGallery
            items={getEyeBrowsGalleryImages()}
            showPlayButton={false}
            showThumbnails={false}
            showBullets={true}
            swipeThreshold="20"
            lazyLoad={true}
          />
        </Box>
      </Grid>

      <Grid
        container
        direction="column"
        justify="center"
        textAlign="center"
        alignSelf="center"
      >
        <Container>
          <Typography alignSelf="flex-start">{t("EyeLashesText")}</Typography>
        </Container>

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
            items={getEyeLashesGalleryImages()}
            showPlayButton={false}
            showThumbnails={false}
            showBullets={true}
            swipeThreshold="20"
            lazyLoad={true}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default EyeBrowsAndLashes;

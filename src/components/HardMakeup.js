import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Grid, Typography, Container } from "@mui/material";
import getHardMakeupGalleryImages from "../functions/HardMakeupImages";
import ImageGallery from "react-image-gallery";

const HardMakeup = () => {
  const { t } = useTranslation();

  return (
    <Grid
        container       
        direction="column"
        justify="center"
        textAlign="center"
        alignSelf="center"
      >
        <Typography alignSelf="flex-start" variant="h5">
          {t("HardMakeup")}
        </Typography>

        <Container>
          <Typography alignSelf="flex-start">{t("HardMakeupText")}</Typography>
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
            items={getHardMakeupGalleryImages()}
            showPlayButton={false}
            showThumbnails={false}
            showBullets={true}
            swipeThreshold="20"
            lazyLoad={true}
          />
        </Box>
      </Grid>
  );
};

export default HardMakeup;

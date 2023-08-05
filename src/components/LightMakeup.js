import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Grid, Typography, Container } from "@mui/material";
import getLightMakeupGalleryImages from "../functions/LightMakeupmages";
import ImageGallery from "react-image-gallery";

const LightMakeup = () => {
  const { t } = useTranslation();

  return (
    <Grid
        container       
        direction="column"
        justify="center"
        textAlign="center"
        alignSelf="center"       
        sx={{mb: 2}}
      >
        <Typography sx={{ml: 2, mb:2}} alignSelf="flex-start" variant="h5">
          {t("LightMakeup")}
        </Typography>

        <Container>
          <Typography alignSelf="flex-start">{t("LightMakeupText")}</Typography>
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
            items={getLightMakeupGalleryImages()}
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

export default LightMakeup;

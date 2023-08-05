import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Grid, Typography, Container } from "@mui/material";
import getLightMakeupGalleryImages from "../functions/LightMakeupmages";
import ImageGallery from "react-image-gallery";
import getEyeBrowsGalleryImages from "../functions/EyeBrowsImages";

const PermanentEyeBrows = () => {
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
        <Container>
          <Typography alignSelf="flex-start">{t("PermanentBrowsText")}</Typography>
        </Container>    
      </Grid>
  );
};

export default PermanentEyeBrows;

import React from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Grid,
  Typography,
  Container,
  Button,
  Collapse,
  useTheme,
} from "@mui/material";
import getLightMakeupGalleryImages from "../functions/LightMakeupmages";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ImageGallery from "react-image-gallery";

const LightMakeup = () => {
  const { t } = useTranslation();
  const [detailsVisible, setChecked] = React.useState(false);
  const theme = useTheme();
  const textColor = theme.palette.text.primary;
  const handleDropDownClick = () => {
    setChecked(!detailsVisible);
  };

  return (
    <Grid
      container
      direction="column"
      justify="center"
      textAlign="center"
      alignSelf="center"
      sx={{ mb: 2 }}
    >
      <Button        
        endIcon={detailsVisible ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        alignSelf="flex-start"
        onClick={handleDropDownClick}
        sx={{
          ml: 1,
          mb: 2,
          width: 250,
          textTransform: "none",
          padding: 0,
          color: { color: textColor },
        }}
      >
        <Typography variant="h5">{t("LightMakeup")}</Typography>
      </Button>

      <Container>
        <Collapse in={detailsVisible}>
          <Typography alignSelf="flex-start">{t("LightMakeupText")}</Typography>
        </Collapse>
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

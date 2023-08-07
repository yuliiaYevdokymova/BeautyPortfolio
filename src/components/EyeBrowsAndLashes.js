import React from "react";
import { useTranslation } from "react-i18next";
import getEyeBrowsGalleryImages from "../functions/EyeBrowsImages";
import getEyeLashesGalleryImages from "../functions/EyeLashesImages";
import ImageGallery from "react-image-gallery";
import {
  Box,
  Grid,
  Typography,
  Container,
  Button,
  Collapse,
  useTheme,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const EyeBrowsAndLashes = () => {
  const { t } = useTranslation();
  const [browsDetailsVisible, setBrowsDetailsVisible] = React.useState(false);
  const [lashesDetailsVisible, setLashesDetailsVisible] = React.useState(false);
  const theme = useTheme();
  const textColor = theme.palette.text.primary;
  const handleBrowsDetailsDropDownClick = () => {
    setBrowsDetailsVisible(!browsDetailsVisible);
  };
  const handleLashesDetailsDropDownClick = () => {
    setLashesDetailsVisible(!lashesDetailsVisible);
  };

  return (
    <Grid sx={{ mb: 2 }}>
      <Grid
        container
        direction="column"
        justify="center"
        textAlign="center"
        alignSelf="center"
      >
        <Button        
        endIcon={browsDetailsVisible ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        alignSelf="flex-start"
        onClick={handleBrowsDetailsDropDownClick}
        sx={{
          ml: 1,
          mb: 2,
          width: 250,
          textTransform: "none",
          padding: 0,
          color: { color: textColor },
        }}
      >
        <Typography variant="h5">{t("EyeBrows")}</Typography>
      </Button>

      <Container>
        <Collapse in={browsDetailsVisible}>
          <Typography alignSelf="flex-start">{t("EyeBrowsText")}</Typography>
        </Collapse>
      </Container>

        <Box
          sx={{
            display: "flex",
            alignSelf: "center",
            marginTop: 2,
            width: "45vh",
            maxWidth: "90vw",
            mb: 2,
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
        <Button        
        endIcon={lashesDetailsVisible ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        alignSelf="flex-start"
        onClick={handleLashesDetailsDropDownClick}
        sx={{
          ml: 1,
          mb: 2,
          width: 250,
          textTransform: "none",
          padding: 0,
          color: { color: textColor },
        }}
      >
        <Typography variant="h5">{t("EyeLashes")}</Typography>
      </Button>

      <Container>
        <Collapse in={lashesDetailsVisible}>
          <Typography alignSelf="flex-start">{t("EyeLashesText")}</Typography>
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

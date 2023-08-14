import React from "react";
import { useTranslation } from "react-i18next";
import getEyeBrowsGalleryImages from "../functions/EyeBrowsImages";
import getEyeLashesGalleryImages from "../functions/EyeLashesImages";
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
import HorizontalGallery from "./HorizontalGallery";

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
    <Grid sx={{ mb: 5 }}>
      <Grid
        container
        direction="column"
        justify="center"
        textAlign="center"
        alignSelf="center"
        sx={{ mb: 5 }}
      >
        <Button        
        endIcon={browsDetailsVisible ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        alignSelf="flex-start"
        onClick={handleBrowsDetailsDropDownClick}
        sx={{
          ml: 2,
          mb: 5,
          width: 250,
          textTransform: "none",
          padding: 0,
          color: { color: textColor },
        }}
      >
        <Typography variant="h4">{t("EyeBrows")}</Typography>
      </Button>

      <Container sx={{mb:2}}>
        <Collapse in={browsDetailsVisible}>
          <Typography alignSelf="flex-start">{t("EyeBrowsText")}</Typography>
        </Collapse>
      </Container>

        <Box
          sx={{
            display: "flex",
            alignSelf: "center",          
            width: "95%",            
          }}
        >
          <HorizontalGallery images={getEyeBrowsGalleryImages()} dynamicBullets={false}/>
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
          ml: 2,
          mb: 5,
          width: 250,
          textTransform: "none",
          padding: 0,
          color: { color: textColor },
        }}
      >
        <Typography variant="h4">{t("EyeLashes")}</Typography>
      </Button>

      <Container sx={{mb:2}}>
        <Collapse in={lashesDetailsVisible}>
          <Typography alignSelf="flex-start">{t("EyeLashesText")}</Typography>
        </Collapse>
      </Container>

        <Box
          sx={{
            display: "flex",
            alignSelf: "center",          
            width: "95%",
          }}
        >
           <HorizontalGallery images={getEyeLashesGalleryImages()} dynamicBullets={false}/>
        </Box>
      </Grid>
    </Grid>
  );
};

export default EyeBrowsAndLashes;

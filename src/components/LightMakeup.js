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
import HorizontalGallery from "./HorizontalGallery";

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
      sx={{mt: 5, mb: 5}} 
    >
      <Button
        endIcon={detailsVisible ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        alignSelf="flex-start"
        onClick={handleDropDownClick}
        sx={{
          ml: 2,
          mb: 5,
          width: 280,
          textTransform: "none",
          padding: 0,
          color: { color: textColor },
        }}
      >
        <Typography variant="h4">{t("LightMakeup")}</Typography>
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
          width: "95%",
        }}
      >
        <HorizontalGallery
          images={getLightMakeupGalleryImages()}
          dynamicBullets={false}
        />
      </Box>
    </Grid>
  );
};

export default LightMakeup;

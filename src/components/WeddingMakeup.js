import React from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Grid,
  Typography,
  Container,
  Button,
  Collapse,
  useTheme
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import getWeddingMakeupImages from "../functions/WeddingMakeupImages";
import HorizontalGallery from "./HorizontalGallery";

const WeddingMakeup = () => {
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
        onClick={handleDropDownClick}
        sx={{
          ml: 2,
          mb: 5,
          width: 360,
          textTransform: "none",
          padding: 0,
          color: { color: textColor },
        }}
      >
        <Typography variant="h4">{t("WeddingMakeup")}</Typography>
      </Button>

      <Container sx={{mb:2}}>
        <Collapse in={detailsVisible}>
          <Typography alignSelf="flex-start">{t("WeddingMakeupText")}</Typography>
        </Collapse>
      </Container>

        <Box
          sx={{
            display: "flex",
            alignSelf: "center",          
            width: "95%",
          }}
        >
          <HorizontalGallery images={getWeddingMakeupImages()} dynamicBullets={false}/>
        </Box>
      </Grid>
  );
};

export default WeddingMakeup;

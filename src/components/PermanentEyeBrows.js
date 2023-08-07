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

const PermanentEyeBrows = () => {
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
        sx={{mb: 2}}
      >
        <Button        
        endIcon={detailsVisible ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        alignSelf="flex-start"
        onClick={handleDropDownClick}
        sx={{
          ml: 1,
          mb: 2,
          width: 300,
          textTransform: "none",
          padding: 0,
          color: { color: textColor },
        }}
      >
        <Typography variant="h6">{t("MoreAboutPermanentBrows")}</Typography>
      </Button>

      <Container>
        <Collapse in={detailsVisible}>
          <Typography alignSelf="flex-start">{t("PermanentBrowsText")}</Typography>
        </Collapse>
      </Container>
      </Grid>
  );
};

export default PermanentEyeBrows;

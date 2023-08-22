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
  useMediaQuery,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const About = () => {
  const { t } = useTranslation();
  const [detailsVisible, setChecked] = React.useState(false);
  const theme = useTheme();
  const isSmallerThanMedium = useMediaQuery((theme) =>
    theme.breakpoints.down("md")
  );
  const textColor = theme.palette.text.primary;
  const aboutMeTypography =  <Typography textAlign="center" alignSelf="center" variant="h4">  {t("AboutMe")} </Typography>;
  const handleDropDownClick = () => {
    setChecked(!detailsVisible);
  };

  return (
    <Box>
      {isSmallerThanMedium ? (
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
         {aboutMeTypography}
        </Button>
      ) : (
        <Grid sx={{ mb: 2 }}>
          {aboutMeTypography}
        </Grid>
      )}

      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2,
        }}
      >
        <Grid
          xs={12}
          item
          md={6}
          sx={{
            display: "flex",
            textAlign: "center",
            alignSelf: "center",
            mb: 2,
          }}
        >
          {isSmallerThanMedium ? (
            <Container sx={{ ml: 2, mr: 2}}>
              <Collapse in={detailsVisible}>
                <Typography sx={{ width: "100%", }}>
                  {t("AboutMeText")}
                </Typography>
              </Collapse>
            </Container>
          ) : (
            <Container sx={{ ml: 2}}>
            <Typography sx={{ width: "100%"}}>
              {t("AboutMeText")}
            </Typography>
            </Container>
          )}
        </Grid>

        <Grid
          md={6}
          item
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: "75%",
              height: "auto",
              maxHeight: "80vh",
            }}
            component="img"
            src={require("../assests/images/AboutMe.PNG")}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;

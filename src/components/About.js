import React from "react";
import { useTranslation } from "react-i18next";
import {  Grid,  useMediaQuery,} from "@mui/material";
import aboutPhoto from "../assests/images/AboutMe.PNG";
import PhotoWithText from "./PhotoWithText";
import PhotoWithTextUnder from "./PhotoWithTextUnder";

const About = () => {
  const { t } = useTranslation();
  const isSmallerThanMedium = useMediaQuery((theme) =>
    theme.breakpoints.down("md")
  );

  return isSmallerThanMedium ? (
    <Grid
      container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: 2,
      }}
    >
      <PhotoWithTextUnder
        image={aboutPhoto}
        text={t("AboutMeText")}
      />
    </Grid>
  ) : (
    <Grid
      direction="column"
      container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: 2,
      }}
    >
      <PhotoWithText image={aboutPhoto} text={t("AboutMeText")} backgroundPosition="0% 18%" />
    </Grid>
  );
};  

export default About;

import React from "react";
import { useTranslation } from "react-i18next";
import { Grid, useMediaQuery } from "@mui/material";
import introPhoto from "../assests/images/MainBrowsAndLashesImage.jpg";
import PhotoWithText from "./PhotoWithText";
import PhotoWithTextUnder from "./PhotoWithTextUnder";

const EyeBrowsAndLashesIntro = () => {
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
        image={introPhoto}
        text={t("EyeBrowsAndLashesText")}
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
      <PhotoWithText image={introPhoto} text={t("EyeBrowsAndLashesText")} />
    </Grid>
  );
};

export default EyeBrowsAndLashesIntro;

import React from "react";
import { useTranslation } from "react-i18next";
import { Grid, useMediaQuery } from "@mui/material";
import introPhoto from "../assests/images/PermanentMainPhoto.jpg";
import PhotoWithText from "./PhotoWithText";
import PhotoWithTextUnder from "./PhotoWithTextUnder";

const PermanentEyeBrowsIntro = () => {
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
        text={t("PermanentBrowsIntroText")}
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
      <PhotoWithText image={introPhoto} text={t("PermanentBrowsIntroText")} />
    </Grid>
  );
};

export default PermanentEyeBrowsIntro;

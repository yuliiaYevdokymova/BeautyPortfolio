import React from "react";
import { useTranslation } from "react-i18next";
import { Grid, useMediaQuery } from "@mui/material";
import makeupImage from "../assests/images/makeupMainPhoto.jpg";
import PhotoWithText from "./PhotoWithText";
import PhotoWithTextUnder from "./PhotoWithTextUnder";

const Makeup = () => {
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
      <PhotoWithTextUnder image={makeupImage} text={t("MakeupMainText")} />
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
      <PhotoWithText image={makeupImage} text={t("MakeupMainText")} />
    </Grid>
  );
};

export default Makeup;

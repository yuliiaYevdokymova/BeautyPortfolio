import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Grid, Typography, Container } from "@mui/material";

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <Grid
      container     
      direction="column"
      justify="center"
      textAlign="center"
      alignSelf="center"
    >
      <Typography justify="center" sx={{ marginTop: 2 }} variant="h5">
        {t("Contacts")}
      </Typography>

      <Typography justify="center" sx={{ marginTop: 2 }} variant="h5">
        {t("FollowMe")}
      </Typography>
    </Grid>
  );
};

export default Contacts;

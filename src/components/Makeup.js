import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Grid, Typography, Container } from "@mui/material";

const Makeup = () => {
  const { t } = useTranslation();

  return (
    <Grid
      container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb:2
      }}
    >      

      <Grid
        md={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",   
          mb:2      
        }}
      >
        <Box
          sx={{
            maxWidth: "75%",
            height: "auto",
            maxHeight: "80vh",
          }}
          component="img"
          src={require("../assests/images/makeupMainPhoto.jpg")}
        />
      </Grid>

      <Container
        xs={12}
        md={6}
        sx={{
          display: "flex",
          textAlign: "center",
          alignSelf: "center",
        }}
      >
        <Typography sx={{ width: "100%"}}>{t("MakeupMainText")}</Typography>
      </Container>
    </Grid>
  );
};

export default Makeup;

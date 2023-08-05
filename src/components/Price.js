import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Grid, Typography, Container } from "@mui/material";

const Price = () => {
  const { t } = useTranslation();

  return (
    <Grid
      container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: "75%",
          height: "auto",
          maxHeight: "80vh",  
          margin:2        
        }}
        component="img"
        src={require("../assests/images/MakeupPrice.JPG")}
      />

      <Box
        sx={{
          maxWidth: "75%",
          height: "auto",
          maxHeight: "80vh",
        }}
        component="img"
        src={require("../assests/images/EyeBrowsAndLashesPrice.JPG")}
      />
    </Grid>
  );
};

export default Price;

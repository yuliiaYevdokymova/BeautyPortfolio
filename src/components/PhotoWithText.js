import React from "react";
import { Grid, Typography, Container, useMediaQuery } from "@mui/material";

const PhotoWithText = ({ image, text, backgroundPosition= '0% 0%' }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  return (
    <Grid
      container
      item
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: 2,
        backgroundImage: `url(${image})`,
        backgroundPosition: backgroundPosition,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "75vh",
        width: "95%",
      }}
    >
      <Container
        xs={12}
        md={6}
        item
        sx={{
          display: "flex",
          textAlign: "center",
          alignSelf: "flex-end",
          mb: 2,
        }}
      >
        {prefersDarkMode ? (
          <Typography sx={{ width: "100%", background: "rgba(0, 0, 0, 0.2)" }}>
            {text}
          </Typography>
        ) : (
          <Typography
            sx={{ width: "100%", background: "rgba(255, 255, 255, 0.4)" }}
          >
            {text}
          </Typography>
        )}
      </Container>
    </Grid>
  );
};

export default PhotoWithText;

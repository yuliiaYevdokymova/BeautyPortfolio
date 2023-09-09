import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";

const PhotoWithTextUnder = ({ image, text }) => {
  return (
    <Box>
      <Grid
        md={6}
        item
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2,
        }}
      >
        <Box
          sx={{
            maxWidth: "90%",
            height: "auto",
            maxHeight: "80vh",
          }}
          component="img"
          src={image}
        />
      </Grid>

      <Container
        xs={12}
        md={6}
        item
        sx={{
          display: "flex",
          textAlign: "center",
          alignSelf: "center",
        }}
      >
        <Typography sx={{ width: "100%" }}>{text}</Typography>
      </Container>
    </Box>
  );
};

export default PhotoWithTextUnder;

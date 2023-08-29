import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Grid, Typography, Container, useMediaQuery } from "@mui/material";
import makeupImage from "../assests/images/makeupMainPhoto.jpg";

const Makeup = () => {
  const { t } = useTranslation();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const isSmallerThanMedium = useMediaQuery((theme) =>
  theme.breakpoints.down("md")
);

  return (
    isSmallerThanMedium ?   
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
        item
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",   
          mb:2      
        }}
      >
        <Box
          sx={{
            maxWidth: "90%",
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
        item
        sx={{
          display: "flex",
          textAlign: "center",
          alignSelf: "center",
        }}
      >
        <Typography sx={{ width: "100%"}}>{t("MakeupMainText")}</Typography>
      </Container>
    </Grid>    

    :
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

    <Grid  
      container
      item
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: 2,
        backgroundImage: `url(${makeupImage})`,
        backgroundPosition: "0% 0%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",       
        minHeight: "75vh",
        width: "95%"
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
        {prefersDarkMode ? <Typography sx={{ width: "100%", background: "rgba(0, 0, 0, 0.2)"}}>{t("MakeupMainText")}</Typography>
        :  <Typography sx={{ width: "100%", background: "rgba(255, 255, 255, 0.4)"}}>{t("MakeupMainText")}</Typography>}
      </Container>     
    </Grid>
  </Grid>
  );
};

export default Makeup;

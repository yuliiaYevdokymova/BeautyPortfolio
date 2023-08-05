import React from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import TikTokIcon from "./TikTokIcon";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useTheme } from "@mui/material/styles";

const Contacts = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const test = theme.palette.background.default;

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

      <Box>
        <Typography justify="center" sx={{ marginTop: 2 }}>
          {t("LocationTitle")} : {t("Location")}
        </Typography>

        <Typography justify="center" sx={{ marginTop: 2 }}>
          {t("Phone")} : +4917682277511
        </Typography>

        <Typography justify="center" sx={{ marginTop: 2 }}>
          {t("Email")} : yuliya.yevdokimova@gmail.com
        </Typography>
      </Box>

      <Typography justify="center" sx={{ marginTop: 2 }} variant="h5">
        {t("FollowMe")}
      </Typography>
      <Box>
        <IconButton
          sx={{ width: "40px" }}
          href="https://instagram.com/yuliiamore?igshid=MzRlODBiNWFlZA=="
          target="_blank"
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          sx={{ width: "40px" }}
          href="https://www.tiktok.com/@yuliiamore?_t=8eSKhziobH3&_r=1"
          target="_blank"
        >
          <TikTokIcon/>
        </IconButton>
      </Box>
    </Grid>
  );
};

export default Contacts;

import React from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Grid,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  useTheme,
} from "@mui/material";
import DataProtection from "./DataProtection";
import DataProtectionEn from "./DataProtectionEn";

const Compliance = () => {
  const { t, i18n  } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const [dataProtectionOpen, setDataProtectionOpen] = React.useState(false);
  const theme = useTheme();
  const textColor = theme.palette.text.primary;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDataProtectionClickOpen = () => {
    setDataProtectionOpen(true);
  };

  const handleDataProtectionClickClose = () => {
    setDataProtectionOpen(false);
  };

  return (
    <Grid
      container
      direction="column"
      justify="center"
      textAlign="center"
      alignSelf="center"
    >
      <Box>
        <Button
          variant="text"
          onClick={handleClickOpen}
          sx={{ color: { color: textColor }, textDecoration: "underline" }}
        >
          {t("Impressum")}
        </Button>

        <Button
          variant="text"
          onClick={handleDataProtectionClickOpen}
          sx={{ color: { color: textColor }, textDecoration: "underline" }}
        >
          {t("DataProtection")}
        </Button>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{t("Impressum")}</DialogTitle>

          <DialogContent>
            <Typography justify="center" sx={{ marginTop: 2 }}>
              Yuliia Yevdokymova
            </Typography>

            <Typography justify="center" sx={{ marginTop: 2 }}>
              {t("Email")} : yuliya.yevdokimova@gmail.com
            </Typography>

            <Typography justify="center" sx={{ marginTop: 2 }}>
              {t("LocationTitle")} : Richard-Strauss-Straße, 81679, München
            </Typography>

            <Typography justify="center" sx={{ marginTop: 2 }}>
              {t("Phone")} : +4917682277511
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              {t("Ok")}
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={dataProtectionOpen}
          onClose={handleDataProtectionClickClose}
        >
          <DialogTitle>{t("DataProtection")}</DialogTitle>

          <DialogContent>
           {i18n.language === "de" ? <DataProtection /> : <DataProtectionEn/>}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDataProtectionClickClose} autoFocus>
              {t("Ok")}
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Grid>
  );
};

export default Compliance;

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

const Contacts = () => {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const textColor = theme.palette.text.primary;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Grid>
  );
};

export default Contacts;

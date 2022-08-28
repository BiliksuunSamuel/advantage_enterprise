import {
  FacebookOutlined,
  Instagram,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonProps,
  Chip,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import moment from "moment";
import React from "react";
import { SizedBox } from "../components";
import AppColors from "../constants/AppColors";
import { FlatIcons } from "../constants/Icons";

export default function FooterView() {
  return (
    <Stack
      color={useTheme().palette.common.white}
      padding={1}
      bgcolor={AppColors.footer_bg}
    >
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          alignSelf="center"
        >
          <Stack direction="row" alignItems="center" justifyContent="center">
            {["About", "Services", "Contacts", "Adverts"].map((title) => (
              <FooterLink title={title} key={title} />
            ))}
          </Stack>
        </Stack>
      </Container>
      <Divider
        sx={{
          borderColor: useTheme().palette.common.white,
          margin: useTheme().spacing(0.5, 0),
        }}
      />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        padding={1}
        spacing={1}
        sx={(theme) => ({
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          },
        })}
      >
        <Typography variant="body1">
          &copy; {moment().format("YYYY")} Avantage Marketting Hub
        </Typography>
        <Stack direction="row" alignItems="center">
          <Typography
            sx={{ color: useTheme().palette.common.white }}
            variant="body2"
          >
            Follow Us:
          </Typography>
          <IconButton size="small">
            <FacebookOutlined sx={{ color: useTheme().palette.common.white }} />
          </IconButton>
          <IconButton size="small">
            <Twitter sx={{ color: useTheme().palette.common.white }} />
          </IconButton>
          <IconButton size="small">
            <YouTube sx={{ color: useTheme().palette.common.white }} />
          </IconButton>
          <IconButton size="small">
            <Instagram sx={{ color: useTheme().palette.common.white }} />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
}

interface IFooterLinkProps {
  title: string;
  props?: ButtonProps;
}

function FooterLink({ title, props }: IFooterLinkProps) {
  return (
    <Button
      size="small"
      variant="text"
      sx={(theme) => ({
        color: theme.palette.common.white,
        textTransform: "none",
      })}
      {...props}
    >
      {title}
    </Button>
  );
}

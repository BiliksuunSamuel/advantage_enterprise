import {
  Box,
  Chip,
  Container,
  Fade,
  Grid,
  Grow,
  Slide,
  Stack,
  Typography,
  Zoom,
} from "@mui/material";
import React from "react";
import { ProductCard } from "../components";

export default function ProductsView() {
  return (
    <Box
      sx={(theme) => ({
        position: "relative",
        background: theme.palette.action.hover,
        height: "100%",
      })}
    >
      <Container>
        <Stack
          sx={(theme) => ({
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column",
            },
          })}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid
            container
            sx={(theme) => ({
              justifyContent: "center",
            })}
          >
            {links.map((info, index) => (
              <ProductCard info={info} key={Math.random().toString()} />
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}

export interface ImageProps {
  image?: string;
  link?: string;
  about?: string;
  title?: string;
}

const links: ImageProps[] = [
  {
    link: "http://www.mylooklocal.com/",
    title: "Advertise in Spectrum Monthly",
    about:
      "Spectrum Monthly offers a wide range of ad sizes and advertising options to fit your budget and impact needs",
    image:
      "https://spectrummonthly.com/wp-content/uploads/2022/05/spectrum-monthly-ad-coupons-770x352-1-768x351.jpg",
  },
  {
    link: "https://www.townmoneysaver.com/",
    title: "Advertise on the Spectrum Cover",
    about:
      "Reserve now and guarantee your ad will be seen on Spectrum Monthly covers and highlight options",
    image:
      "https://spectrummonthly.com/wp-content/uploads/2022/05/spectrum-monthly-cover-770x352-1-768x351.jpg",
  },
  {
    link: "https://www.moneypages.com/",
    title: "Deliver Your Printed Flyers & Inserts",
    about:
      "Take advantage of direct-to-home delivery with rates lower than an individual direct mailing by delivering with Spectrum",
    image:
      "https://spectrummonthly.com/wp-content/uploads/2022/05/inserts-770x352-2-768x351.jpg",
  },
  {
    link: "https://www.moneypages.com/",
    title: "DIGITAL MARKETING",
    about:
      "Consumers spend an average of 24 hours per week online, especially their mobile device. Money Pages’s digital marketing strategists deliver display advertising and search engine marketing campaigns to turbo charge your direct mail marketing",
    image:
      "https://www.moneypages.com/wp-content/uploads/2019/04/1556554068___magazine_whole_revised.jpg",
  },
];

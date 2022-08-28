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
          {links.map((info, index) => (
            <ProductCard info={info} key={Math.random().toString()} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export interface ImageProps {
  image?: string;
  link?: string;
}

const links: ImageProps[] = [
  {
    link: "http://www.mylooklocal.com/",
    image:
      "https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/90/023513/1.jpg?9323",
  },
  {
    link: "https://www.townmoneysaver.com/",
    image:
      "https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/44/523514/1.jpg?6114",
  },
  {
    link: "https://www.moneypages.com/",
    image:
      "https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/04/345771/1.jpg?9387",
  },
  {
    link: "https://www.moneypages.com/",
    image:
      "https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/19/351104/1.jpg?6635",
  },
];

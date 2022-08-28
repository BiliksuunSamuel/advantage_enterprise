import { Box, Fade, Slide, Stack, Typography, Zoom } from "@mui/material";
import React, { useState } from "react";
import { SizedBox } from "../../../components";
import { FooterView } from "../../../view";
import { MobileMenu } from "../components";
import {
  AboutSectionView,
  HomeBannerView,
  Navbar,
  ProductsView,
  SubMenuView,
} from "../views";

export default function HomePage() {
  const [mobileMenu, setMobileMenu] = useState<HTMLElement | null>(null);
  return (
    <Box
      sx={(theme) => ({
        height: "100vh",
        width: "100%",
        background: theme.palette.common.white,
        overflowX: "hidden",
      })}
    >
      <Navbar />

      <MobileMenu
        anchorEl={mobileMenu}
        handleClose={() => setMobileMenu(null)}
      />

      <Box
        sx={(theme) => ({
          marginTop: "50px",
        })}
      >
        <SubMenuView handleMobileMenu={(el) => setMobileMenu(el)} />
        <HomeBannerView />

        <Box
          id="services"
          sx={(theme) => ({
            padding: theme.spacing(1),
            boxShadow: theme.shadows[1],
            borderRadius: theme.spacing(0),
            margin: theme.spacing(0.5, 0),
            background: "#f0f0f0",
          })}
        >
          <Stack alignItems="center" justifyContent="center">
            <Typography variant="h4">Services</Typography>
          </Stack>
        </Box>
        <Slide direction="right" timeout={2500}>
          <ProductsView />
        </Slide>
        <AboutSectionView />
        <FooterView />
      </Box>
    </Box>
  );
}

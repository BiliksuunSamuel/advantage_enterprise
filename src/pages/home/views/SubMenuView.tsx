import { MoreVertOutlined } from "@mui/icons-material";
import { Box, Button, Chip, Stack } from "@mui/material";
import React, { useState } from "react";
import { Expanded, SizedBox } from "../../../components";
import { MobileMenu } from "../components";

interface IProps {
  handleMobileMenu: (el: HTMLElement) => void;
}
export default function SubMenuView({ handleMobileMenu }: IProps) {
  return (
    <Box
      sx={(theme) => ({
        padding: theme.spacing(1.5),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        boxShadow: theme.shadows[1],
        background: theme.palette.background.paper,
        zIndex: 1000,
        position: "sticky",
        top: 50,
      })}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
        paddingLeft={2}
        spacing={0.5}
        flex={1}
        sx={(theme) => ({
          width: "100%",
          [theme.breakpoints.down("sm")]: {
            display: "none",
          },
        })}
      >
        {subMenuLinks.map((link) => (
          <SubMenuLink title={link} />
        ))}
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        paddingLeft={2}
        spacing={0.5}
        flex={1}
        sx={(theme) => ({
          [theme.breakpoints.up("md")]: {
            display: "none",
          },
          width: "100%",
          padding: theme.spacing(0, 1),
        })}
      >
        <Stack direction="row" alignItems="center" justifyContent="flex-start">
          {mobileMenuLinks.map((link) => (
            <SubMenuLink title={link} />
          ))}
        </Stack>
        <Chip
          sx={(theme) => ({
            borderStyle: "none",
            background: "transparent",
            boderRadius: 0,
          })}
          onClick={(event) => handleMobileMenu(event.currentTarget)}
          label="More"
          avatar={<MoreVertOutlined />}
        />
      </Stack>
    </Box>
  );
}

interface ISubMenuLink {
  title: string;
}
function SubMenuLink({ title }: ISubMenuLink) {
  return (
    <Button
      size="small"
      variant="text"
      color="primary"
      sx={(theme) => ({
        color: theme.palette.common.black,
      })}
    >
      {title}
    </Button>
  );
}

const subMenuLinks: string[] = [
  "Home",
  "Magazine",
  "Direct Mail",
  "Branding",
  "Local Savings",
];
const mobileMenuLinks: string[] = ["Home", "Magazine"];

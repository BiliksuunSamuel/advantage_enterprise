import {
  AppBar,
  Box,
  Button,
  Chip,
  Container,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { SizedBox } from "../../../components";
import { FlatIcons } from "../../../constants/Icons";
import resources from "../../../resources";

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      color="primary"
      variant="outlined"
      sx={(theme) => ({
        height: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: theme.palette.common.white,
      })}
    >
      <Toolbar
        sx={(theme) => ({
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        })}
      >
        <Container>
          <Stack
            direction="row"
            sx={(theme) => ({
              alignItems: "center",
              width: "100%",
            })}
          >
            <Stack
              sx={(theme) => ({
                [theme.breakpoints.down("sm")]: {
                  display: "none",
                },
              })}
            >
              <Box
                sx={(theme) => ({
                  height: "30px",
                  overflow: "hidden",
                  background: "transparent",
                })}
              >
                <img
                  src="https://advn.app/wp-content/uploads/2021/11/logo1.png"
                  alt="app-logo"
                />
              </Box>
            </Stack>
            <Stack
              direction="row"
              sx={(theme) => ({
                alignItems: "center",
                justifyContent: "flex-end",
                flex: 1,
                padding: theme.spacing(0, 1),
                [theme.breakpoints.down("sm")]: {
                  justifyContent: "center",
                },
              })}
              spacing={1}
            >
              <Chip
                avatar={
                  <FlatIcons.FcHome style={{ background: "transparent" }} />
                }
                sx={(theme) => ({
                  borderRadius: theme.spacing(0.5),
                  padding: theme.spacing(0.5),
                })}
                color="primary"
                label={<Typography variant="body2">Home</Typography>}
                onClick={() => {}}
              />
              <SizedBox w={1} />
              <NavLink title="About" />
              <NavLink title="Services" />
              <NavLink title="Contact" />
              <SizedBox w={2} />
            </Stack>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

interface ILinkProps {
  title: string;
}
function NavLink({ title }: ILinkProps) {
  return (
    <Button
      sx={(theme) => ({
        textTransform: "none",
        color: theme.palette.common.black,
      })}
      size="small"
    >
      <a
        href={`#${title.toLowerCase()}`}
        style={{
          textDecoration: "none",
          color: useTheme().palette.common.black,
        }}
      >
        {title}
      </a>
    </Button>
  );
}

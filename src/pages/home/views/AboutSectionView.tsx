import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { SizedBox } from "../../../components";

export default function AboutSectionView() {
  return (
    <Box
      id="about"
      sx={(theme) => ({
        background: theme.palette.primary.dark,
        padding: theme.spacing(2),
      })}
    >
      <Container>
        <Stack
          alignItems="center"
          justifyContent="center"
          direction="row"
          sx={(theme) => ({
            color: theme.palette.common.white,
            [theme.breakpoints.down("sm")]: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            },
          })}
          spacing={1}
          divider={
            <Box
              sx={(theme) => ({
                width: "5px",
                height: "200px",
                borderRight: "1px solid rgba(211,211,211,0.1)",
                [theme.breakpoints.down("sm")]: {
                  display: "none",
                },
                marginRight: theme.spacing(1),
              })}
            />
          }
        >
          <Stack
            sx={(theme) => ({
              [theme.breakpoints.down("sm")]: {
                flexDirection: "column",
                alignItems: "center",
              },
            })}
            flex={2}
            direction="row"
            alignItems="center"
          >
            <Stack>
              <Box
                sx={(theme) => ({
                  width: "240px",
                  height: "240px",
                  borderRadius: "240px",
                  overflow: "hidden",
                })}
              >
                <img
                  src="https://advn.app/wp-content/uploads/2021/11/v3.jpg"
                  alt="about-image"
                />
              </Box>
            </Stack>
            <Stack
              sx={(theme) => ({
                [theme.breakpoints.down("sm")]: {
                  width: "100%",
                },
                padding: theme.spacing(2),
              })}
            >
              <Typography
                sx={(theme) => ({
                  textAlign: "center",
                })}
                variant="h4"
              >
                About Us
              </Typography>
              <Typography
                sx={(theme) => ({
                  textAlign: "justify",
                })}
                variant="body2"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt voluptate sed quis quia! Pariatur, dolor. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Sit, ipsam!
              </Typography>
              <SizedBox h={1} />

              <Stack direction="row"></Stack>
            </Stack>
          </Stack>
          <Stack flex={1.5} id="contact">
            <Typography
              sx={(theme) => ({
                textAlign: "center",
              })}
              variant="h4"
            >
              Contact Us
            </Typography>
            <Divider
              sx={(theme) => ({
                borderColor: theme.palette.common.white,
              })}
            />
            <SizedBox h={0.85} />
            <Stack alignItems="center" spacing={1} direction="row">
              <Typography variant="body2">Email:</Typography>
              <Typography variant="body2">
                <a
                  style={{
                    textDecoration: "none",
                    color: useTheme().palette.common.white,
                  }}
                  href="mailto:ananeinstitute@gmail.com"
                >
                  ananeinstitute@gmail.com
                </a>
              </Typography>
            </Stack>
            <Stack spacing={1} alignItems="center" direction="row">
              <Typography variant="body2">Tel:</Typography>
              <Typography variant="body2">+233(0)247471231</Typography>
            </Stack>
            <Stack spacing={1} alignItems="center" direction="row">
              <Typography variant="body2">Address:</Typography>
              <Typography
                sx={(theme) => ({
                  fontSize: theme.spacing(1.4),
                })}
                variant="body2"
              >
                Adom Baptist Street, St Paul Methodist Church, Takyiman, Bono
                East, Ghana
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

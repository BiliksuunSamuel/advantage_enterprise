import {
  Box,
  Button,
  Container,
  Divider,
  Slide,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import resources from "../../../resources";

export default function HomeBannerView() {
  return (
    <Box
      sx={(theme) => ({
        position: "relative",
        padding: theme.spacing(2, 0),
      })}
    >
      <Container>
        <Stack
          sx={(theme) => ({
            [theme.breakpoints.down("sm")]: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            },
          })}
          alignItems="center"
          justifyContent="center"
          direction="row"
        >
          <Slide in direction="down" timeout={1500}>
            <Stack
              sx={(theme) => ({
                [theme.breakpoints.down("sm")]: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                },
              })}
              maxWidth={625}
              flex={1}
            >
              <Container>
                <Typography variant="h4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing vel?
                </Typography>
                <Stack paddingY={useTheme().spacing(1)}>
                  <Typography
                    variant="body2"
                    sx={(theme) => ({
                      fontSize: theme.spacing(1.5),
                    })}
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quos porro consectetur non ratione expedita commodi
                    provident itaque dolores optio quis pariatur aspernatur a
                    impedit quam quaerat quod fuga ipsa magnam enim atque autem
                    excepturi quo, similique maiores? Architecto, repudiandae
                    esse nam reiciendis aliquid, sed quasi debitis consequuntur
                    placeat, fugit quas?
                  </Typography>
                </Stack>
                <Divider />
                <Stack
                  spacing={1}
                  paddingY={useTheme().spacing(2)}
                  direction="row"
                  sx={(theme) => ({
                    justifyContent: "center",
                  })}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Button
                    sx={(theme) => ({
                      height: "25px",
                      textTransform: "none",
                    })}
                    color="primary"
                    variant="contained"
                    size="small"
                  >
                    <a
                      href="https://kentengh.com/"
                      style={{
                        textDecoration: "none",
                        color: useTheme().palette.common.white,
                      }}
                    >
                      Trade With Us
                    </a>
                  </Button>
                  <Button
                    sx={(theme) => ({
                      height: "25px",
                      textTransform: "none",
                    })}
                    color="primary"
                    variant="contained"
                    size="small"
                  >
                    Read More
                  </Button>
                </Stack>
              </Container>
            </Stack>
          </Slide>
          <Slide in direction="left" timeout={1000}>
            <Stack>
              {[0].map((ind, index) => (
                <Box
                  key={Math.random()}
                  sx={(theme) => ({
                    height: "300px",
                    overflow: "hidden",
                  })}
                >
                  <img src={resources.banner} />
                </Box>
              ))}
            </Stack>
          </Slide>
        </Stack>
      </Container>
    </Box>
  );
}

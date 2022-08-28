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
                <Typography variant="h4">LOCAL AD-VANTAGE</Typography>
                <Stack paddingY={useTheme().spacing(1)}>
                  <Typography
                    variant="body2"
                    sx={(theme) => ({
                      fontSize: theme.spacing(1.5),
                    })}
                  >
                    We help local business owners who want to get the most value
                    and response rate for their advertising dollar. Geo-target
                    specific markets with direct mail options tailored to your
                    needs. Our print experts can help you target and design an
                    effective piece that grabs your audience’s attention - and
                    lands directly in their mailbox.
                  </Typography>
                </Stack>
                <Divider />
                <Stack
                  spacing={1}
                  paddingY={useTheme().spacing(2)}
                  direction="row"
                  sx={(theme) => ({
                    justifyContent: "flex-start",
                  })}
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <Button
                    sx={(theme) => ({
                      height: "25px",
                      textTransform: "none",
                      width: "200px",
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

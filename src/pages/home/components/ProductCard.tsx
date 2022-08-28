import React from "react";
import Typography from "@mui/material/Typography";
import resources from "../../../resources";
import { Box, Button, Divider, Grid, Stack, useTheme } from "@mui/material";

import { ImageProps } from "../views/ProductsView";

interface IProps {
  info: ImageProps;
}
export default function ProductCard({ info }: IProps) {
  return (
    <Grid xs={10} sm={6} md={4} lg={3} xl={2} item>
      <Stack
        sx={(theme) => ({
          margin: theme.spacing(1.5),
          background: theme.palette.background.paper,
          transition: "all 0.45s ease-in-out",
          borderRadius: theme.spacing(0.5),
          border: `1px solid ${theme.palette.action.hover}`,
          alignItems: "center",
          justifyContent: "center",
          overFlow: "hidden",
          padding: theme.spacing(1, 0.5),
          paddingBottom: theme.spacing(0.5),
          "&:hover": {
            boxShadow: theme.shadows[2],
            borderStyle: "none",
            cursor: "pointer",
            transform: "scaleX(1.1)",
          },
        })}
      >
        <Box
          sx={(theme) => ({
            overflow: "hidden",
            background: "transparent",
            height: "150px",
            alignSelf: "center",
            borderStyle: "none",
            width: "100%",
          })}
        >
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={info.image ? info.image : resources.banner}
            alt="banner"
          />
        </Box>
        <Stack
          sx={(theme) => ({
            padding: theme.spacing(1),
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            overflow: "hidden",
            paddingBottom: theme.spacing(0.5),
          })}
        >
          <Stack direction="row" spacing={1}>
            <Typography
              sx={(theme) => ({
                textTransform: "uppercase",
                textAlign: "center",
              })}
              variant="body1"
            >
              {info.title}
            </Typography>
          </Stack>
          <Stack
            sx={(theme) => ({
              overflow: "hidden",
              padding: theme.spacing(0, 1),
              alignItems: "center",
              justifyContent: "center",
            })}
          >
            <Typography
              variant="body2"
              sx={(theme) => ({
                fontSize: theme.spacing(1.4),
                textAlign: "justify",
                padding: theme.spacing(0, 1),
              })}
              textOverflow="wrap"
            >
              {info.about}
            </Typography>
          </Stack>

          <Button
            sx={(theme) => ({
              textTransform: "none",
              height: "20px",
              margin: theme.spacing(0.5, 0),
              color: theme.palette.primary.dark,
            })}
            variant="text"
            size="small"
            color="primary"
            fullWidth
          >
            <a
              href={info.link}
              target="_blank"
              style={{
                textDecoration: "none",
                color: useTheme().palette.primary.dark,
              }}
              rel="noreferrer"
            >
              Learn More
            </a>
          </Button>
        </Stack>
      </Stack>
    </Grid>
  );
}

import React from "react";
import Typography from "@mui/material/Typography";
import resources from "../../../resources";
import {
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  IconButton,
  Stack,
  useTheme,
} from "@mui/material";
import { LocationOnOutlined, PhoneOutlined } from "@mui/icons-material";
import { Expanded, SizedBox } from "../../../components";
import { FlatIcons } from "../../../constants/Icons";
import { ImageProps } from "../views/ProductsView";

interface IProps {
  info: ImageProps;
}
export default function ProductCard({ info }: IProps) {
  return (
    <Box
      sx={(theme) => ({
        margin: theme.spacing(1.5),
        maxWidth: "180px",
      })}
    >
      <Box
        sx={(theme) => ({
          borderRadius: "100%",
          overflow: "hidden",
          background: "transparent",
          width: "150px",
          height: "150px",
          alignSelf: "center",
          border: `1px solid ${theme.palette.primary.main}`,
        })}
      >
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={info.image ? info.image : resources.banner}
          alt="banner"
        />
      </Box>
      <Box>
        <Stack direction="row" spacing={1}>
          <Typography variant="body1">DOLLAR GROCERIES.</Typography>
        </Stack>
        {/* <Divider /> */}
        <Stack>
          <Typography
            sx={(theme) => ({
              fontSize: theme.spacing(1.5),
            })}
            variant="body2"
          >
            Adom Baptist Street, USA
          </Typography>
          <Typography
            sx={(theme) => ({
              fontSize: theme.spacing(1.5),
            })}
            variant="body2"
          >
            +1 (720) 313-2654
          </Typography>
          <Divider />
          <Typography
            variant="body2"
            sx={(theme) => ({
              fontSize: theme.spacing(1.4),
            })}
          >
            Dollar Groceries Provides Money Gram, African Grocery Store, Ethnic
            Market,Fish,Poultry,Beef,Pork,Canned Goods,Beverages And Convenience
            Store to the Aurora, CO Area
          </Typography>
        </Stack>
        <Button
          sx={(theme) => ({
            textTransform: "none",
            height: "20px",
            margin: theme.spacing(0.5, 0),
          })}
          variant="contained"
          size="small"
          color="primary"
          fullWidth
        >
          <a
            href={info.link}
            target="_blank"
            style={{
              textDecoration: "none",
              color: useTheme().palette.common.white,
            }}
          >
            Visit
          </a>
        </Button>
      </Box>
    </Box>
  );
}

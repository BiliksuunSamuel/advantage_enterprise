import { Box } from "@mui/material";
import React from "react";

interface IProps {
  h?: number;
  w?: number;
}
export default function SizedBox({ h, w }: IProps) {
  return (
    <Box
      sx={(theme) => ({
        margin: theme.spacing(h ? h : 0, w ? w : 0),
      })}
    />
  );
}

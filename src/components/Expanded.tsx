import { Box } from "@mui/material";
import React from "react";

interface IProps {
  flex?: number;
}
export default function Expanded({ flex }: IProps) {
  return (
    <Box
      sx={{
        flex: flex ? flex : 1,
      }}
    />
  );
}

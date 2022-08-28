import { Menu, MenuItem } from "@mui/material";
import React from "react";

interface IProps {
  anchorEl: HTMLElement | null;
  handleClose: () => void;
}
export default function MobileMenu({ anchorEl, handleClose }: IProps) {
  return (
    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)}>
      <MenuItem onClick={handleClose}>Direct Mail</MenuItem>
      <MenuItem onClick={handleClose}>Local Savings</MenuItem>
      <MenuItem onClick={handleClose}>Branding</MenuItem>
    </Menu>
  );
}

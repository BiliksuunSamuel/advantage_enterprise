import React from "react";
import { Router } from "./router";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import themeConfiguration from "./configuration/themeConfiguration";
export default function App() {
  return (
    <ThemeProvider theme={themeConfiguration}>
      <Router />
    </ThemeProvider>
  );
}

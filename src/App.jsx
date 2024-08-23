import React from "react";
import AppBar from "./components/AppBar";
import Images from "./components/Images";
import Details from "./components/Details";
import { Box } from "@mui/material";

export default function App() {
  return (
    <>
      <AppBar />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          p: 2,
          maxWidth: { xs: "400px", md: "100%" },
          maxHeight: { xs: "400px", md: "100%" },
          margin: { xs: "0 auto", md: "0" },
        }}
      >
        <Images />
        <Details />
      </Box>
    </>
  );
}

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
          flexDirection: { sm: "column", md: "row" },

          py: 2,
          maxWidth: { sm: "400px", md: "100%" },
          maxHeight: { sm: "400px", md: "100%" },
          margin: { sm: "0 auto", md: "0" },
        }}
      >
        <Images />
        <Details />
      </Box>
    </>
  );
}

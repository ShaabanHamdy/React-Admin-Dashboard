import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeographyChar from "./geo";

const Geography = () => {
  return (
    <Box sx={{ height: "70vh" }}>
      <Header title="Geography" subTitle="Simple Geography Chart" />
      <GeographyChar />
    </Box>
  );
};

export default Geography;

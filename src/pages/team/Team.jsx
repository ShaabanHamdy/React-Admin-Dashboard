import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { columns, rows } from "./data";
import { Box } from "@mui/material";
import Header from './../../components/Header';

const Team = () => {
  return (
    <>
      <Box>
        <Header title={"TEAM"} subTitle={"Managing the Team Members"} />

        <Box sx={{ height: 600, width: "100%" }}>
          <DataGrid rows={rows} columns={columns} />
        </Box>
      </Box>
    </>
  );
};

export default Team;

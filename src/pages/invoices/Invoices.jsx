import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from "./data";
import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";

const Invoices = () => {
  return (
    <>

      <Box >
      <Header title="INVOICES" subTitle="List of Invoice Balances" />
      <Box sx={{ height: 600, width: "100%" }}>

        <DataGrid
          checkboxSelection
          slots={{
            toolbar: GridToolbar,
          }}
          rows={rows}
          columns={columns}
          />
      </Box>
          </Box>
    </>
  );
};

export default Invoices;

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from "./data";
import { Box } from "@mui/material";
import Header from "../../components/Header";

const Contacts = () => {
  return (
    <>
      <Box sx={{ height: 600, width: "100%" }}>
      <Header
        title="CONTACTS"
        subTitle="List of Contacts for Future Reference"
      />
        <DataGrid
          slots={{
            toolbar: GridToolbar,
          }}
          rows={rows}
          columns={columns}
        />
      </Box>
    </>
  );
};

export default Contacts;

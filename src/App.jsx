import { Box, CssBaseline } from "@mui/material";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import React, { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
import getDesignTokens from "./themes";
import TopBar from "./components/TopBar";

const App = () => {
  const local =
    localStorage.getItem("currentMode") != null
      ? localStorage.getItem("currentMode")
      : "light";
  // ======================================================================
  const [mode, setMode] = useState(local);
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  // =============================================================================================================================================================

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }));

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />

          <TopBar
            open={open}
            setMode={setMode}
            handleDrawerOpen={handleDrawerOpen}
          />

          <SideBar open={open} handleDrawerClose={handleDrawerClose} />

          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />

            <Outlet />
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;

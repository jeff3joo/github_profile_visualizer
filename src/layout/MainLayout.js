import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "../components/TopBar";
import { Box } from "@mui/material";

const MainLayout = () => {

  const TOPBAR_HEIGHT = 64;

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100vh",
        width: "100vw",
        color: "text.primary",
      }}
    >
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: `${TOPBAR_HEIGHT}px`,
          zIndex: 10,
        }}
      >
        <Topbar />
      </Box>
      <Box
        component="main"
        sx={{
          pt:`${TOPBAR_HEIGHT}px`,
          height:`calc(100vh - ${TOPBAR_HEIGHT}px)`,
      }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;

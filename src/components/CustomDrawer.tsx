import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import ConstellationLogo from "../assets/constellation.png";
import CustomDrawerTab from "./CustomDrawerTab";
import DetailBox from "./DetailBox";

const drawerWidth = 320;

export default function CustomDrawer() {
   return (
      <Box sx={{ display: "flex", height: "100%" }}>
         <CssBaseline />
         <AppBar
            position="fixed"
            sx={{
               width: `calc(100% - ${drawerWidth}px)`,
               ml: `${drawerWidth}px`,
            }}
         ></AppBar>
         <Drawer
            sx={{
               width: drawerWidth,
               flexShrink: 0,
               "& .MuiDrawer-paper": {
                  width: drawerWidth,
                  boxSizing: "border-box",
               },
            }}
            variant="permanent"
            anchor="left"
         >
            <Toolbar sx={{ margin: "0 auto" }}>
               <img
                  style={{ maxWidth: "200px" }}
                  src={ConstellationLogo}
                  alt="constelation logo"
               />
            </Toolbar>
            <Divider />

            <CustomDrawerTab />
         </Drawer>

         <Box
            component="main"
            sx={{
               height: "100%",
               flexGrow: 1,
               bgcolor: "background.default",
               p: 3,
            }}
         >
            <Toolbar />

            <Box
               sx={{
                  maxWidth: "700px",
                  border: "1px solid gray",
                  borderRadius: "15px 15px 0 0",
                  height: "100%",
               }}
            >
               <DetailBox />
            </Box>
         </Box>
      </Box>
   );
}

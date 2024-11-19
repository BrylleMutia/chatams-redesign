import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material/styles";

import ConstellationLogo from "../assets/constellation.png";
import CustomDrawerTab from "./CustomDrawerTab";
import DetailBox from "./DetailBox";
import NoteBox from "./NoteBox";
import NoteInput from "./NoteInput";
import { AppContext } from "../context/AppContext";
import { AppContextType } from "../context/types";

const drawerWidth = 320;

export default function CustomDrawer() {
   const { notes } = useContext(AppContext) as AppContextType;

   const theme = useTheme();

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
            <Box
               sx={{
                  maxWidth: "700px",
                  border: `1px solid ${theme.palette.grey[500]}`,
                  borderRadius: "15px",
                  marginTop: "5%",
                  backgroundColor: `${theme.palette.grey[500]}`,
               }}
            >
               <Box
                  sx={{
                     height: "100%",
                     display: "flex",
                     flexDirection: "column",
                     justifyContent: "space-between",
                  }}
               >
                  <Box sx={{ flexGrow: "1" }}>
                     <DetailBox />

                     <Box
                        sx={{
                           overflowY: "scroll",
                           flexGrow: "1",
                           maxHeight: "30em",
                        }}
                     >
                        {notes.map((note, index) => (
                           <NoteBox noteDetails={note} key={index} />
                        ))}
                     </Box>
                  </Box>

                  <Box sx={{ margin: "2em" }}>
                     <NoteInput />
                  </Box>
               </Box>
            </Box>
         </Box>
      </Box>
   );
}

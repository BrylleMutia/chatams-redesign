import { createRef, useContext } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import AccentureLogo from "../assets/acn_logo.png";
import CustomDrawerTab from "./CustomDrawerTab";
import DetailBox from "./DetailBox";
import NoteBox from "./NoteBox";
import NoteInput from "./NoteInput";
import { AppContext } from "../context/AppContext";
import { AppContextType } from "../context/types";
import { useScrollIntoView } from "../utils";
import Assistant from "./Assistant";

const drawerWidthSmDown = 280;
const drawerWidthSmUp = 320;

export default function CustomDrawer() {
   const { notes } = useContext(AppContext) as AppContextType;

   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down("xl"));

   // scroll new note into view
   const newNoteBoxRef = createRef<HTMLDivElement>();
   useScrollIntoView(newNoteBoxRef, notes);

   return (
      <Box
         sx={{
            display: "flex",
            height: "100%",
         }}
      >
         <CssBaseline />
         <AppBar
            position="fixed"
            sx={{
               width: `calc(100% - ${
                  matches ? drawerWidthSmDown : drawerWidthSmUp
               }px)`,
               ml: `${matches ? drawerWidthSmDown : drawerWidthSmUp}px`,
            }}
         ></AppBar>
         <Drawer
            sx={{
               width: matches ? drawerWidthSmDown : drawerWidthSmUp,
               flexShrink: 0,
               "& .MuiDrawer-paper": {
                  width: matches ? drawerWidthSmDown : drawerWidthSmUp,
                  boxSizing: "border-box",
               },
            }}
            variant="permanent"
            anchor="left"
         >
            <Toolbar sx={{ margin: "0 auto" }}>
               <img
                  style={{ maxWidth: "130px" }}
                  src={AccentureLogo}
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
                  width: "650px",
                  border: `1px solid ${theme.palette.grey[500]}`,
                  borderRadius: "15px",
                  marginBottom: "2em",
                  backgroundColor: `${theme.palette.grey[500]}`,
                  height: "100%",
               }}
            >
               <Box
                  sx={{
                     height: "100%",
                     display: "flex",
                     flexDirection: "column",
                     justifyContent: "space-between",
                     paddingBottom: "2em",
                  }}
               >
                  <Box sx={{ flexGrow: 1 }}>
                     <DetailBox />

                     <Box
                        sx={{
                           overflowY: "scroll",
                           flexGrow: "1",
                           maxHeight: matches ? "15em" : "32em",
                        }}
                     >
                        {notes.map((note, index) => (
                           <NoteBox noteDetails={note} key={index} />
                        ))}

                        <div ref={newNoteBoxRef} />
                     </Box>
                  </Box>

                  <Box sx={{ margin: "2em" }}>
                     <NoteInput />
                  </Box>
               </Box>
            </Box>
         </Box>

         <Box
            sx={{
               height: "100%",
               maxWidth: "20em",
               display: "flex",
               mr: matches ? "2em" : "0",
               flexDirection: "column",
               justifyContent: "center",
               alignItems: "center",
            }}
         >
            <Assistant />
         </Box>
      </Box>
   );
}

// TODO: Continue Assistant Component

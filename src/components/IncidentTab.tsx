import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import EmailIcon from "@mui/icons-material/Email";
import DraftsIcon from "@mui/icons-material/Drafts";
import MailLockIcon from "@mui/icons-material/MailLock";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";

import SearchField from "./SearchField";
import SeverityBtnGroup from "./SeverityBtnGroup";
import { IncidentState, SAMPLE_INCS } from "../constants/sample_inc";
import CustomDrawerActions from "./CustomDrawerActions";

export const stateIconIdentifier = (incState: IncidentState) => {
   if (incState === "new") {
      return <EmailIcon />;
   } else if (incState === "inprogress") {
      return <DraftsIcon />;
   } else if (incState === "onhold") {
      return <MailLockIcon />;
   } else if (incState === "resolved") {
      return <MarkEmailReadIcon />;
   }
};

const IncidentTab = () => {
   return (
      <Box sx={{ height: "100%" }}>
         <Box sx={{ marginY: "1em", textAlign: "center" }}>
            <SeverityBtnGroup />
         </Box>

         <Box>
            <SearchField />
         </Box>

         <Box
            sx={{
               display: "flex",
               flexDirection: "column",
               justifyContent: "space-between",
            }}
         >
            <List>
               {SAMPLE_INCS.map((inc, index) => (
                  <ListItem key={inc.number} disablePadding>
                     <ListItemButton>
                        <ListItemIcon>
                           {stateIconIdentifier(inc.state)}
                        </ListItemIcon>
                        <ListItemText
                           primary={inc.number}
                           secondary={inc.desc.substring(0, 30) + "..."}
                        />
                     </ListItemButton>
                  </ListItem>
               ))}
            </List>

            <Divider />
            <CustomDrawerActions />
         </Box>
      </Box>
   );
};

export default IncidentTab;

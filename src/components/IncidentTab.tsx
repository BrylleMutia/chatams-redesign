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
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import SearchField from "./SearchField";
import SeverityBtnGroup from "./SeverityBtnGroup";
import { IncidentState } from "../constants/sample_inc";
import CustomDrawerActions from "./CustomDrawerActions";
import { useContext } from "react";
import { AppContextType } from "../context/types";
import { AppContext } from "../context/AppContext";

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
   const { incidents, handleChangeSelectedItemDetail } = useContext(AppContext) as AppContextType;

   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down("lg")); // 1200px

   const navTextLimit = matches ? 25 : 30;

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
               {incidents.map((inc, index) => (
                  <ListItem key={index} disablePadding>
                     <ListItemButton onClick={() => handleChangeSelectedItemDetail(inc.number)}>
                        <ListItemIcon>
                           {stateIconIdentifier(inc.state)}
                        </ListItemIcon>
                        <ListItemText
                           primary={inc.number}
                           secondary={
                              inc.desc.substring(0, navTextLimit) + "..."
                           }
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

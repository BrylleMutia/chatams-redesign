import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import SearchField from "./SearchField";
import SeverityBtnGroup from "./SeverityBtnGroup";
import CustomDrawerActions from "./CustomDrawerActions";
import { stateIconIdentifier } from "./IncidentTab";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import { AppContextType } from "../context/types";
import BlankMessage from "./BlankMessage";
import { filterItemsBySeverity } from "../utils";

const RequestTab = () => {
   const { requests, handleChangeSelectedItemDetail, severityFilter } =
      useContext(AppContext) as AppContextType;

   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down("lg")); // 1200px

   const navTextLimit = matches ? 25 : 30;

   return (
      <div>
         <Box sx={{ marginY: "1em", textAlign: "center" }}>
            <SeverityBtnGroup />
         </Box>

         <Box>
            <SearchField />
         </Box>

         <List>
            {filterItemsBySeverity(requests, severityFilter).length == 0 ? (
               // if mapped item is blank, show message
               <Box sx={{ textAlign: "center", my: "1em" }}>
                  <BlankMessage />
               </Box>
            ) : (
               filterItemsBySeverity(requests, severityFilter).map(
                  (req, index) => (
                     <ListItem key={index} disablePadding>
                        <ListItemButton
                           onClick={() =>
                              handleChangeSelectedItemDetail(req.number)
                           }
                        >
                           <ListItemIcon>
                              {stateIconIdentifier(req.state)}
                           </ListItemIcon>
                           <ListItemText
                              primary={req.number}
                              secondary={
                                 req.desc.substring(0, navTextLimit) + "..."
                              }
                           />
                        </ListItemButton>
                     </ListItem>
                  )
               )
            )}
         </List>

         <Divider />
         <CustomDrawerActions />
      </div>
   );
};

export default RequestTab;

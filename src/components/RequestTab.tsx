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

import { SAMPLE_RITMS } from "../constants/sample_ritm";

const RequestTab = () => {
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
            {SAMPLE_RITMS.map((ritm) => (
               <ListItem key={ritm.number} disablePadding>
                  <ListItemButton>
                     <ListItemIcon>
                        {stateIconIdentifier(ritm.state)}
                     </ListItemIcon>
                     <ListItemText
                        primary={ritm.number}
                        secondary={ritm.desc.substring(0, navTextLimit) + "..."}
                     />
                  </ListItemButton>
               </ListItem>
            ))}
         </List>

         <Divider />
         <CustomDrawerActions />
      </div>
   );
};

export default RequestTab;

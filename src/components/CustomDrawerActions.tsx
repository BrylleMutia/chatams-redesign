import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const CustomDrawerActions = () => {
   return (
      <List>
         {["Settings", "Logout"].map((text, index) => (
            <ListItem key={text} disablePadding>
               <ListItemButton>
                  <ListItemIcon>
                     {index % 2 === 0 ? <SettingsIcon /> : <ExitToAppIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
               </ListItemButton>
            </ListItem>
         ))}
      </List>
   );
};

export default CustomDrawerActions;

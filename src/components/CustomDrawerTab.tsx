import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { TABS } from "../constants/drawer";
import IncidentTab from "./IncidentTab";
import RequestTab from "./RequestTab";

interface TabPanelProps {
   children?: React.ReactNode;
   index: number;
   value: number;
}

function CustomTabPanel(props: TabPanelProps) {
   const { children, value, index, ...other } = props;

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
      >
         {value === 0 && (
            <Box sx={{ height: "100%" }}>
               <IncidentTab />
            </Box>
         )}

         {value === 1 && (
            <Box>
               <RequestTab />
            </Box>
         )}
      </div>
   );
}

function a11yProps(index: number) {
   return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
   };
}

export default function CustomDrawerTab() {
   const [value, setValue] = React.useState(0);

   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
   };

   return (
      <Box sx={{ width: "100%", height: "100%" }}>
         <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
               value={value}
               onChange={handleChange}
               aria-label="basic tabs example"
            >
               {TABS.map((tabTitle, index) => (
                  <Tab label={tabTitle} {...a11yProps(index)} />
               ))}
            </Tabs>
         </Box>
         {TABS.map((tabTitle, index) => (
            <CustomTabPanel value={value} index={index}>
               test
            </CustomTabPanel>
         ))}
      </Box>
   );
}

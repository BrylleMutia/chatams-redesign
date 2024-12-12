import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { TABS } from "../constants/drawer";
import IncidentTab from "./IncidentTab";
import RequestTab from "./RequestTab";
import { AppContextType, DrawerTabs } from "../context/types";
import { AppContext } from "../context/AppContext";

interface TabPanelProps {
   children?: React.ReactNode;
   tabName: DrawerTabs;
   value: DrawerTabs;
}

function CustomTabPanel(props: TabPanelProps) {
   const { children, value, tabName, ...other } = props;

   return (
      <div
         role="tabpanel"
         hidden={value !== tabName}
         id={`simple-tabpanel-${tabName}`}
         aria-labelledby={`simple-tab-${tabName}`}
         {...other}
      >
         {value === "incident" && (
            <Box sx={{ height: "100%" }}>
               <IncidentTab />
            </Box>
         )}

         {value === "request" && (
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
   const { selectedTab, handleChangeTab } = React.useContext(
      AppContext
   ) as AppContextType;

   const handleChange = (newValue: DrawerTabs) => {
      handleChangeTab(newValue);
   };

   return (
      <Box sx={{ width: "100%", height: "100%" }}>
         <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={selectedTab} aria-label="basic tabs example">
               {TABS.map((tabTitle, index) => (
                  <Tab
                     onClick={() => handleChange(tabTitle)}
                     key={index}
                     label={tabTitle}
                     {...a11yProps(index)}
                  />
               ))}
            </Tabs>
         </Box>
         {TABS.map((tabTitle, index) => (
            <CustomTabPanel key={index} value={selectedTab} tabName={tabTitle}>
               {tabTitle}
            </CustomTabPanel>
         ))}
      </Box>
   );
}

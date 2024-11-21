import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import { SEVERITY } from "../constants/drawer";

const SeverityBtnGroup = () => {
   const [navMode, setNavMode] = useState<string>("p4");

   const handleNavModeChange = (selectedNavMode: string) =>
      setNavMode(selectedNavMode);

   return (
      <ButtonGroup
         variant="outlined"
         size="small"
         aria-label="Basic button group"
      >
         {SEVERITY.map((sev, index) => (
            <Button
               key={index}
               onClick={() => handleNavModeChange(sev)}
               variant={navMode === sev ? "contained" : "outlined"}
            >
               {sev}
            </Button>
         ))}
      </ButtonGroup>
   );
};

export default SeverityBtnGroup;

import { useContext } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import { SEVERITY } from "../constants/drawer";
import { AppContext } from "../context/AppContext";
import { AppContextType } from "../context/types";

const SeverityBtnGroup = () => {
   const { severityFilter, handleChangeSeverityFilter } = useContext(
      AppContext
   ) as AppContextType;

   return (
      <ButtonGroup
         variant="outlined"
         size="small"
         aria-label="Basic button group"
      >
         {SEVERITY.map((sev, index) => (
            <Button
               key={index}
               onClick={() => handleChangeSeverityFilter(sev)}
               variant={severityFilter === sev ? "contained" : "outlined"}
            >
               {sev}
            </Button>
         ))}
      </ButtonGroup>
   );
};

export default SeverityBtnGroup;

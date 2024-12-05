import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function StateSelect() {
   const [itemState, setItemState] = React.useState("");

   const handleChange = (event: SelectChangeEvent) => {
      setItemState(event.target.value);
   };

   return (
      <div>
         <FormControl size="small" sx={{ mb: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
               State
            </InputLabel>
            <Select
               labelId="demo-simple-select-standard-label"
               id="demo-simple-select-standard"
               value={itemState}
               onChange={handleChange}
               label="State"
            >
               <MenuItem value="">
                  <em>None</em>
               </MenuItem>
               <MenuItem value="New">New</MenuItem>
               <MenuItem value="Assigned">Assigned</MenuItem>
               <MenuItem value="On Hold">On Hold</MenuItem>
               <MenuItem value="Resolved">Resolved</MenuItem>
               <MenuItem value="Closed">Closed</MenuItem>
            </Select>
         </FormControl>
      </div>
   );
}

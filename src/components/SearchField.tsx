import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchField() {
   return (
      <Box sx={{ "& > :not(style)": { display: "flex", marginX: "2em" } }}>
         <TextField
            id="outlined-size-small"
            placeholder="Search"
            size="small"
            slotProps={{
               input: {
                  startAdornment: (
                     <InputAdornment position="start">
                        <SearchIcon />
                     </InputAdornment>
                  ),
               },
            }}
         />
      </Box>
   );
}

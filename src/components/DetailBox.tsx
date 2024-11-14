import React from "react";
import { Box, Typography } from "@mui/material";

const DetailBox = () => {
   return (
      <Box
         sx={{
            display: "flex",
            flexDirection: "column",
            px: "2em",
            py: "1em",
         }}
      >
         <Box sx={{ marginBottom: "1em" }}>
            <Typography variant="h6">INC5615632700</Typography>
            <Typography variant="caption">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
               nisi velit, viverra at libero eget, auctor aliquam purus. Fusce
               non metus id erat efficitur scelerisque.
            </Typography>
         </Box>
         <Box sx={{ display: "flex", gap: "0.5em" }}>
            <Box
               sx={{
                  border: "1px solid gray",
                  borderRadius: "30px",
                  px: "1em",
               }}
            >
               <Typography variant="caption">Caller: Brylle Mutia</Typography>
            </Box>
            <br />
            <Box
               sx={{
                  border: "1px solid gray",
                  borderRadius: "30px",
                  px: "1em",
               }}
            >
               <Typography variant="caption">Opened: 10/25/2024</Typography>
            </Box>
         </Box>
      </Box>
   );
};

export default DetailBox;

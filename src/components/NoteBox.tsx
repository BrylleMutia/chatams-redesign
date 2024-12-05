import { Box, Typography } from "@mui/material";
import type { Note } from "../constants/sample_inc";

type NoteBoxProps = {
   noteDetails: Note;
};

const NoteBox = ({ noteDetails }: NoteBoxProps) => {
   const { user, date, content } = noteDetails;

   return (
      <Box
         sx={{
            margin: "1em 2em",
            backgroundColor: "white",
            padding: "0.5em 1em",
            borderRadius: "5px",
            border: "1px solid gray",
         }}
      >
         <Box
            sx={{
               display: "flex",
               justifyContent: "space-between",
               marginBottom: "0.5em",
               borderBottom: "1px solid gray",
               paddingBottom: "0.5em",
            }}
         >
            <Typography variant="caption">{user}</Typography>
            <Typography variant="caption">{date}</Typography>
         </Box>
         <Typography variant="caption">{content}</Typography>
      </Box>
   );
};

export default NoteBox;

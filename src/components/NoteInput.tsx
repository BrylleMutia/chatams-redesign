import React, { useContext, useState } from "react";
import { Box, Button, TextField } from "@mui/material";

import { AppContext } from "../context/AppContext";
import { AppContextType } from "../context/types";

const NoteInput = () => {
   const [noteInput, setNoteInput] = useState<string>("");

   const {
      isLoading,
      selectedTab,
      handleAddIncidentNote,
      handleAddRequestNote,
   } = useContext(AppContext) as AppContextType;

   const handleNoteInputChange = (
      event: React.ChangeEvent<HTMLTextAreaElement>
   ) => {
      setNoteInput(event.target.value);
   };

   const handleSubmitPrompt = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
   };

   const handlePostNote = () => {
      if (!noteInput) return;

      let date = new Date().toLocaleDateString();

      const newNote = {
         user: "c963564@constellation.com",
         date,
         content: noteInput,
      };

      if (selectedTab == "incident") {
         handleAddIncidentNote(newNote);
      } else if (selectedTab == "request") {
         handleAddRequestNote(newNote);
      }
      setNoteInput("");
   };

   return (
      <Box
         component="form"
         onSubmit={handleSubmitPrompt}
         sx={{ display: "flex", backgroundColor: "white" }}
      >
         <TextField
            required
            sx={{
               paddingRight: 0,
               "& .MuiInputBase-root": {
                  paddingRight: 0,
               },
            }}
            value={noteInput}
            id="prompt"
            name="prompt"
            autoComplete="prompt"
            placeholder="Type something"
            onChange={handleNoteInputChange}
            fullWidth
            size="medium"
            multiline
            minRows={2}
            slotProps={{
               input: {
                  endAdornment: (
                     <Box
                        sx={{
                           height: "100%",
                           display: "flex",
                           alignItems: "end",
                        }}
                     >
                        <Button
                           aria-label="send"
                           color="primary"
                           type="submit"
                           disabled={isLoading}
                           onClick={handlePostNote}
                        >
                           Post
                        </Button>
                     </Box>
                  ),
               },
            }}
         />
      </Box>
   );
};

export default NoteInput;

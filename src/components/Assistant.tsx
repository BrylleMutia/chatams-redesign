import React, { useContext, useState } from "react";
import {
   Box,
   IconButton,
   Popover,
   TextField,
   Typography,
   useTheme,
   Button,
} from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import SendIcon from "@mui/icons-material/Send";

import { AppContext } from "../context/AppContext";
import { AppContextType } from "../context/types";
import { QUICK_ACTIONS } from "../constants/quick_actions";

const Assistant = () => {
   const [promptInput, setPromptInput] = useState<string>("");
   const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
      null
   );

   const { isLoading } = useContext(AppContext) as AppContextType;

   const handleTogglePopover = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   const open = Boolean(anchorEl);
   const id = open ? "simple-popover" : undefined;

   const theme = useTheme();

   const handlePromptInputChange = (
      event: React.ChangeEvent<HTMLTextAreaElement>
   ) => {
      setPromptInput(event.target.value);
   };

   return (
      <Box
         sx={{
            height: "100%",
            backgroundColor: theme.palette.grey["500"],
            borderRadius: "15px",
            border: `1px solid ${theme.palette.grey[300]}`,
            marginTop: "4em",
         }}
      >
         <Box
            sx={{
               height: "5em",
               backgroundColor: "#4158D0",
               backgroundImage:
                  "linear-gradient(43deg, #4158D0 0%, #C850C0 46%)",

               borderTopLeftRadius: "15px",
               borderTopRightRadius: "15px",
               display: "flex",
               flexDirection: "column",
               justifyContent: "center",
            }}
         >
            <Typography
               sx={{
                  marginLeft: "0.5em",
               }}
               color="white"
               variant="h6"
            >
               InsightAI
            </Typography>
         </Box>
         <Box
            sx={{
               height: "87%",
               display: "flex",
               flexDirection: "column",
               justifyContent: "space-between",
            }}
         >
            <Box
               sx={{
                  padding: "1em",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  flexGrow: 1,
               }}
            >
               <Typography
                  sx={{ opacity: "0.5", textAlign: "center" }}
                  variant="body1"
                  fontSize={15}
               >
                  Hello there! I'm here to assist you, you can try the{" "}
                  <span style={{ color: theme.palette.primary.main }}>
                     quick actions
                  </span>{" "}
                  or the{" "}
                  <span style={{ color: theme.palette.primary.main }}>
                     prompt
                  </span>{" "}
                  below.
               </Typography>
            </Box>
            <Box
               sx={{
                  padding: "1em",
                  paddingLeft: "0",
                  display: "flex",
               }}
            >
               <IconButton
                  size="small"
                  color="secondary"
                  aria-label="add"
                  onClick={handleTogglePopover}
               >
                  <BoltIcon sx={{ color: theme.palette.primary.main }} />
               </IconButton>

               <Popover
                  elevation={1}
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                     vertical: "top",
                     horizontal: "left",
                  }}
                  transformOrigin={{
                     vertical: "bottom",
                     horizontal: "left",
                  }}
               >
                  <Box
                     sx={{
                        p: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.3em",
                     }}
                  >
                     {QUICK_ACTIONS.map((qaction, index) => (
                        <Button key={index} variant="outlined" size="small">
                           {qaction.text}
                        </Button>
                     ))}
                  </Box>
               </Popover>

               <TextField
                  required
                  sx={{
                     paddingRight: 0,
                     "& .MuiInputBase-root": {
                        padding: "5px",
                        paddingRight: 0,
                        paddingLeft: "20px",
                        fontSize: "13px",
                        backgroundColor: "white",
                     },
                  }}
                  value={promptInput}
                  id="prompt"
                  name="prompt"
                  autoComplete="prompt"
                  placeholder="How can I help you?"
                  autoFocus
                  onChange={handlePromptInputChange}
                  size="small"
                  multiline
                  minRows={1}
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
                              <IconButton
                                 sx={{
                                    paddingLeft: "0.5em",
                                    borderLeft: `1px solid ${theme.palette.grey[300]}`,
                                    borderRadius: 0,
                                 }}
                                 aria-label="send"
                                 color="primary"
                                 type="submit"
                                 size="small"
                                 disabled={isLoading}
                              >
                                 <SendIcon />
                              </IconButton>
                           </Box>
                        ),
                     },
                  }}
               />
            </Box>
         </Box>
      </Box>
   );
};

export default Assistant;

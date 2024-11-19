import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const selectedTheme = "light";

const theme = createTheme({
   palette: {
      mode: selectedTheme,
      ...(selectedTheme === "light"
         ? {
              primary: {
                 main: "#aa00ff",
              },
              secondary: {
                 main: "#212121",
              },
           }
         : {
              primary: {
                 main: "#954bb4",
              },
              secondary: {
                 main: "#d500f9",
              },
              text: {
                 primary: "#fff",
                 secondary: purple[500],
              },
           }),
      grey: {
         "300": "#E0E0E0",
         "500": "#F5F6FA",
      },
   },
});

export default theme;

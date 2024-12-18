import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import AppContextProvider from "./context/AppContext.tsx";

createRoot(document.getElementById("root")!).render(
   <ThemeProvider theme={theme}>
      <AppContextProvider>
         <App />
      </AppContextProvider>
   </ThemeProvider>
);

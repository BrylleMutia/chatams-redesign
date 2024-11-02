import React, { useState } from "react";
import { createContext } from "react";
import type { AppContextType, MUITheme } from "./types";

export const AppContext = createContext<AppContextType | null>(null);

type AppContextProviderProps = {
   children: React.ReactNode;
};

const AppContextProvider = ({ children }: AppContextProviderProps) => {
   const [selectedTheme, setSelectedTheme] = useState<MUITheme>("light");

   const handleChangeTheme = (theme: MUITheme) => {
      setSelectedTheme(theme);
   };

   return (
      <AppContext.Provider value={{ selectedTheme, handleChangeTheme }}>
         {children}
      </AppContext.Provider>
   );
};

export default AppContextProvider;

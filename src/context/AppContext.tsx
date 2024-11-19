import React, { useState } from "react";
import { createContext } from "react";
import type { AppContextType, MUITheme } from "./types";
import type { Note } from "../constants/sample_notes";

export const AppContext = createContext<AppContextType | null>(null);

type AppContextProviderProps = {
   children: React.ReactNode;
};

const AppContextProvider = ({ children }: AppContextProviderProps) => {
   const [selectedTheme, setSelectedTheme] = useState<MUITheme>("light");
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [notes, setNotes] = useState<Note[]>([
      {
         user: "C963564@constellation.com",
         date: "10/20/2024",
         content:
            "Lorem ipsum dolor sit amet consectetur. Mi nibh varius tortor lorem turpis id. Ultricies vitae rhoncus ac aliquam egestas. Pellentesque a libero in et ultricies vitae.",
      },
      {
         user: "C963564@constellation.com",
         date: "10/21/2024",
         content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula eros vitae odio elementum tempor. Cras eleifend ornare nunc. Nunc fringilla arcu nec bibendum venenatis. Duis tincidunt fringilla justo, sit amet tempus lacus blandit et. ",
      },
      {
         user: "C963564@constellation.com",
         date: "10/23/2024",
         content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum imperdiet nisl vel sagittis. Fusce. ",
      },
      {
         user: "C963564@constellation.com",
         date: "10/23/2024",
         content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas leo nec odio condimentum, sed convallis risus fringilla. Donec nunc. ",
      },
   ]);

   const handleChangeTheme = (theme: MUITheme) => {
      setSelectedTheme(theme);
   };

   const handleSetIsLoading = (loadingState: boolean) =>
      setIsLoading(loadingState);

   const handleAddNote = (note: Note) => setNotes((prev) => [...prev, note]);

   return (
      <AppContext.Provider
         value={{
            selectedTheme,
            handleChangeTheme,
            isLoading,
            handleSetIsLoading,
            notes,
            handleAddNote,
         }}
      >
         {children}
      </AppContext.Provider>
   );
};

export default AppContextProvider;

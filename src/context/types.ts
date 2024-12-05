import type { Incident, Note } from "../constants/sample_inc";

export type AppContextType = {
   selectedTheme: MUITheme;
   handleChangeTheme: (theme: MUITheme) => void;
   selectedItemDetail: string;
   handleChangeSelectedItemDetail: (itemName: string) => void;
   isLoading: boolean;
   handleSetIsLoading: (loadingState: boolean) => void;
   incidents: Incident[];
   handleAddNote: (note: Note) => void;
};

export type MUITheme = "light" | "dark";

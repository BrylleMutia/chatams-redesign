import { Note } from "../constants/sample_notes";

export type AppContextType = {
   selectedTheme: MUITheme;
   handleChangeTheme: (theme: MUITheme) => void;
   isLoading: boolean;
   handleSetIsLoading: (loadingState: boolean) => void;
   notes: Note[];
   handleAddNote: (note: Note) => void;
};

export type MUITheme = "light" | "dark";

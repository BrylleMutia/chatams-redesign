export type AppContextType = {
   selectedTheme: MUITheme;
   handleChangeTheme: (theme: MUITheme) => void;
}

export type MUITheme = "light" | "dark"
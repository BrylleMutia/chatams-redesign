export type AppContextType = {
   selectedTheme: MUITheme;
   handleChangeTheme: (theme: MUITheme) => void;
   selectedItemDetail: string;
   handleChangeSelectedItemDetail: (itemName: string) => void;
   isLoading: boolean;
   handleSetIsLoading: (loadingState: boolean) => void;
   selectedTab: DrawerTabs;
   handleChangeTab: (tab: DrawerTabs) => void;
   incidents: Incident[];
   handleAddIncidentNote: (note: Note) => void;
   requests: RequestItem[];
   handleAddRequestNote: (note: Note) => void;
   severityFilter: Severity;
   handleChangeSeverityFilter: (severity: Severity) => void;
};

export type MUITheme = "light" | "dark";
export type DrawerTabs = "incident" | "request";

/** Incident types */
export type Incident = {
   number: string;
   state: IncidentState;
   severity: Severity;
   desc: string;
   notes: Note[];
};

export type Note = {
   user: string;
   date: string;
   content: string;
};

export type IncidentState = "new" | "inprogress" | "onhold" | "resolved";
export type Severity = "ALL" | "P1" | "P2" | "P3" | "P4";

/** Request types */

export type RequestItem = {
   number: string;
   state: IncidentState;
   severity: Severity;
   desc: string;
   notes: Note[];
};

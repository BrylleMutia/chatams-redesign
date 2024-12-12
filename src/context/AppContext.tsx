import React, { useState } from "react";
import { createContext } from "react";
import type {
   AppContextType,
   MUITheme,
   Incident,
   Note,
   Severity,
   RequestItem,
   DrawerTabs,
} from "./types";

export const AppContext = createContext<AppContextType | null>(null);

type AppContextProviderProps = {
   children: React.ReactNode;
};

const AppContextProvider = ({ children }: AppContextProviderProps) => {
   const [selectedTheme, setSelectedTheme] = useState<MUITheme>("light");
   const [selectedTab, setSelectedTab] = useState<DrawerTabs>("incident");
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [selectedItemDetail, setSelectedItemDetail] =
      useState<string>("INC6159676641");
   const [severityFilter, setSeverityFilter] = useState<Severity>("ALL");

   /** mock data for incidents, please replace with REST API data */
   const [incidents, setIncidents] = useState<Incident[]>([
      {
         number: "INC6159676641",
         state: "new",
         severity: "P3",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi velit, viverra at libero eget, auctor aliquam purus. Fusce non metus id erat efficitur scelerisque. ",
         notes: [
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
         ],
      },
      {
         number: "INC5621251589",
         state: "new",
         severity: "P3",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi velit, viverra at libero eget, auctor aliquam purus. Fusce non metus id erat efficitur scelerisque. ",
         notes: [
            {
               user: "C116564@constellation.com",
               date: "10/15/2024",
               content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum imperdiet nisl vel sagittis. Fusce. ",
            },
            {
               user: "C55564@constellation.com",
               date: "10/15/2024",
               content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas leo nec odio condimentum, sed convallis risus fringilla. Donec nunc. ",
            },
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
         ],
      },
      {
         number: "INC4509783111",
         state: "new",
         severity: "P4",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi velit, viverra at libero eget, auctor aliquam purus. Fusce non metus id erat efficitur scelerisque. ",
         notes: [
            {
               user: "C613564@constellation.com",
               date: "08/23/2024",
               content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum imperdiet nisl vel sagittis. Fusce. ",
            },
            {
               user: "C963564@constellation.com",
               date: "08/20/2024",
               content:
                  "Lorem ipsum dolor sit amet consectetur. Mi nibh varius tortor lorem turpis id. Ultricies vitae rhoncus ac aliquam egestas. Pellentesque a libero in et ultricies vitae.",
            },
            {
               user: "C963564@constellation.com",
               date: "08/21/2024",
               content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula eros vitae odio elementum tempor. Cras eleifend ornare nunc. Nunc fringilla arcu nec bibendum venenatis. Duis tincidunt fringilla justo, sit amet tempus lacus blandit et. ",
            },
            {
               user: "C963564@constellation.com",
               date: "08/23/2024",
               content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas leo nec odio condimentum, sed convallis risus fringilla. Donec nunc. ",
            },
         ],
      },
      {
         number: "INC1662221199",
         state: "inprogress",
         severity: "P2",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi velit, viverra at libero eget, auctor aliquam purus. Fusce non metus id erat efficitur scelerisque. ",
         notes: [
            {
               user: "C963564@constellation.com",
               date: "06/09/2024",
               content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula eros vitae odio elementum tempor. Cras eleifend ornare nunc. Nunc fringilla arcu nec bibendum venenatis. Duis tincidunt fringilla justo, sit amet tempus lacus blandit et. ",
            },
            {
               user: "C963564@constellation.com",
               date: "06/09/2024",
               content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum imperdiet nisl vel sagittis. Fusce. ",
            },
            {
               user: "C963564@constellation.com",
               date: "10/23/2024",
               content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas leo nec odio condimentum, sed convallis risus fringilla. Donec nunc. ",
            },
            {
               user: "C963564@constellation.com",
               date: "10/20/2024",
               content:
                  "Lorem ipsum dolor sit amet consectetur. Mi nibh varius tortor lorem turpis id. Ultricies vitae rhoncus ac aliquam egestas. Pellentesque a libero in et ultricies vitae.",
            },
         ],
      },
      {
         number: "INC9078456730",
         state: "inprogress",
         severity: "P3",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi velit, viverra at libero eget, auctor aliquam purus. Fusce non metus id erat efficitur scelerisque. ",
         notes: [
            {
               user: "C963564@constellation.com",
               date: "07/23/2024",
               content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum imperdiet nisl vel sagittis. Fusce. ",
            },
            {
               user: "C963564@constellation.com",
               date: "07/23/2024",
               content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas leo nec odio condimentum, sed convallis risus fringilla. Donec nunc. ",
            },
            {
               user: "C963564@constellation.com",
               date: "07/20/2024",
               content:
                  "Lorem ipsum dolor sit amet consectetur. Mi nibh varius tortor lorem turpis id. Ultricies vitae rhoncus ac aliquam egestas. Pellentesque a libero in et ultricies vitae.",
            },
            {
               user: "C963564@constellation.com",
               date: "07/21/2024",
               content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula eros vitae odio elementum tempor. Cras eleifend ornare nunc. Nunc fringilla arcu nec bibendum venenatis. Duis tincidunt fringilla justo, sit amet tempus lacus blandit et. ",
            },
         ],
      },
      {
         number: "INC4509785111",
         state: "onhold",
         severity: "P3",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi velit, viverra at libero eget, auctor aliquam purus. Fusce non metus id erat efficitur scelerisque. ",
         notes: [
            {
               user: "C113564@constellation.com",
               date: "10/12/2024",
               content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula eros vitae odio elementum tempor. Cras eleifend ornare nunc. Nunc fringilla arcu nec bibendum venenatis. Duis tincidunt fringilla justo, sit amet tempus lacus blandit et. ",
            },
            {
               user: "C113564@constellation.com",
               date: "10/17/2024",
               content:
                  "Lorem ipsum dolor sit amet consectetur. Mi nibh varius tortor lorem turpis id. Ultricies vitae rhoncus ac aliquam egestas. Pellentesque a libero in et ultricies vitae.",
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
         ],
      },
      {
         number: "INC4546711991",
         state: "onhold",
         severity: "P3",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi velit, viverra at libero eget, auctor aliquam purus. Fusce non metus id erat efficitur scelerisque. ",
         notes: [
            {
               user: "C954564@constellation.com",
               date: "10/23/2024",
               content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum imperdiet nisl vel sagittis. Fusce. ",
            },
            {
               user: "C954564@constellation.com",
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
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas leo nec odio condimentum, sed convallis risus fringilla. Donec nunc. ",
            },
         ],
      },
      {
         number: "INC1122545589",
         state: "resolved",
         severity: "P4",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi velit, viverra at libero eget, auctor aliquam purus. Fusce non metus id erat efficitur scelerisque. ",
         notes: [
            {
               user: "C673564@constellation.com",
               date: "10/21/2024",
               content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula eros vitae odio elementum tempor. Cras eleifend ornare nunc. Nunc fringilla arcu nec bibendum venenatis. Duis tincidunt fringilla justo, sit amet tempus lacus blandit et. ",
            },
            {
               user: "C093564@constellation.com",
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
            {
               user: "C963564@constellation.com",
               date: "10/20/2024",
               content:
                  "Lorem ipsum dolor sit amet consectetur. Mi nibh varius tortor lorem turpis id. Ultricies vitae rhoncus ac aliquam egestas. Pellentesque a libero in et ultricies vitae.",
            },
         ],
      },
   ]);

   /** mock data for requests, please replace with REST API data */
   const [requests, setRequests] = useState<RequestItem[]>([
      {
         number: "RITM7589293144",
         state: "new",
         severity: "P4",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi velit, viverra at libero eget, auctor aliquam purus. Fusce non metus id erat efficitur scelerisque. ",
         notes: [
            {
               user: "C673564@constellation.com",
               date: "10/21/2024",
               content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula eros vitae odio elementum tempor. Cras eleifend ornare nunc. Nunc fringilla arcu nec bibendum venenatis. Duis tincidunt fringilla justo, sit amet tempus lacus blandit et. ",
            },
            {
               user: "C093564@constellation.com",
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
            {
               user: "C963564@constellation.com",
               date: "10/20/2024",
               content:
                  "Lorem ipsum dolor sit amet consectetur. Mi nibh varius tortor lorem turpis id. Ultricies vitae rhoncus ac aliquam egestas. Pellentesque a libero in et ultricies vitae.",
            },
         ],
      },
      {
         number: "RITM5612121135",
         state: "inprogress",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi velit, viverra at libero eget, auctor aliquam purus. Fusce non metus id erat efficitur scelerisque. ",
         severity: "P3",
         notes: [
            {
               user: "C954564@constellation.com",
               date: "10/23/2024",
               content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum imperdiet nisl vel sagittis. Fusce. ",
            },
            {
               user: "C954564@constellation.com",
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
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas leo nec odio condimentum, sed convallis risus fringilla. Donec nunc. ",
            },
         ],
      },
      {
         number: "RITM3576771111",
         state: "inprogress",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi velit, viverra at libero eget, auctor aliquam purus. Fusce non metus id erat efficitur scelerisque. ",
         severity: "P3",
         notes: [
            {
               user: "C113564@constellation.com",
               date: "10/12/2024",
               content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula eros vitae odio elementum tempor. Cras eleifend ornare nunc. Nunc fringilla arcu nec bibendum venenatis. Duis tincidunt fringilla justo, sit amet tempus lacus blandit et. ",
            },
            {
               user: "C113564@constellation.com",
               date: "10/17/2024",
               content:
                  "Lorem ipsum dolor sit amet consectetur. Mi nibh varius tortor lorem turpis id. Ultricies vitae rhoncus ac aliquam egestas. Pellentesque a libero in et ultricies vitae.",
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
         ],
      },
      {
         number: "RITM7990011226",
         state: "onhold",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi velit, viverra at libero eget, auctor aliquam purus. Fusce non metus id erat efficitur scelerisque. ",
         severity: "P3",
         notes: [
            {
               user: "C963564@constellation.com",
               date: "07/23/2024",
               content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum imperdiet nisl vel sagittis. Fusce. ",
            },
            {
               user: "C963564@constellation.com",
               date: "07/23/2024",
               content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas leo nec odio condimentum, sed convallis risus fringilla. Donec nunc. ",
            },
            {
               user: "C963564@constellation.com",
               date: "07/20/2024",
               content:
                  "Lorem ipsum dolor sit amet consectetur. Mi nibh varius tortor lorem turpis id. Ultricies vitae rhoncus ac aliquam egestas. Pellentesque a libero in et ultricies vitae.",
            },
            {
               user: "C963564@constellation.com",
               date: "07/21/2024",
               content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula eros vitae odio elementum tempor. Cras eleifend ornare nunc. Nunc fringilla arcu nec bibendum venenatis. Duis tincidunt fringilla justo, sit amet tempus lacus blandit et. ",
            },
         ],
      },
      {
         number: "RITM7990712894",
         state: "onhold",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi velit, viverra at libero eget, auctor aliquam purus. Fusce non metus id erat efficitur scelerisque. ",
         severity: "P2",
         notes: [
            {
               user: "C963564@constellation.com",
               date: "06/09/2024",
               content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula eros vitae odio elementum tempor. Cras eleifend ornare nunc. Nunc fringilla arcu nec bibendum venenatis. Duis tincidunt fringilla justo, sit amet tempus lacus blandit et. ",
            },
            {
               user: "C963564@constellation.com",
               date: "06/09/2024",
               content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum imperdiet nisl vel sagittis. Fusce. ",
            },
            {
               user: "C963564@constellation.com",
               date: "10/23/2024",
               content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas leo nec odio condimentum, sed convallis risus fringilla. Donec nunc. ",
            },
            {
               user: "C963564@constellation.com",
               date: "10/20/2024",
               content:
                  "Lorem ipsum dolor sit amet consectetur. Mi nibh varius tortor lorem turpis id. Ultricies vitae rhoncus ac aliquam egestas. Pellentesque a libero in et ultricies vitae.",
            },
         ],
      },
      {
         number: "RITM5688010281",
         state: "resolved",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi velit, viverra at libero eget, auctor aliquam purus. Fusce non metus id erat efficitur scelerisque. ",
         severity: "P4",
         notes: [
            {
               user: "C613564@constellation.com",
               date: "08/23/2024",
               content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum imperdiet nisl vel sagittis. Fusce. ",
            },
            {
               user: "C963564@constellation.com",
               date: "08/20/2024",
               content:
                  "Lorem ipsum dolor sit amet consectetur. Mi nibh varius tortor lorem turpis id. Ultricies vitae rhoncus ac aliquam egestas. Pellentesque a libero in et ultricies vitae.",
            },
            {
               user: "C963564@constellation.com",
               date: "08/21/2024",
               content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula eros vitae odio elementum tempor. Cras eleifend ornare nunc. Nunc fringilla arcu nec bibendum venenatis. Duis tincidunt fringilla justo, sit amet tempus lacus blandit et. ",
            },
            {
               user: "C963564@constellation.com",
               date: "08/23/2024",
               content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas leo nec odio condimentum, sed convallis risus fringilla. Donec nunc. ",
            },
         ],
      },
      {
         number: "RITM7098110113",
         state: "resolved",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi velit, viverra at libero eget, auctor aliquam purus. Fusce non metus id erat efficitur scelerisque. ",
         severity: "P3",
         notes: [
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
         ],
      },
      {
         number: "RITM9087221108",
         state: "resolved",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi velit, viverra at libero eget, auctor aliquam purus. Fusce non metus id erat efficitur scelerisque. ",
         severity: "P3",
         notes: [
            {
               user: "C963564@constellation.com",
               date: "07/23/2024",
               content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum imperdiet nisl vel sagittis. Fusce. ",
            },
            {
               user: "C963564@constellation.com",
               date: "07/23/2024",
               content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas leo nec odio condimentum, sed convallis risus fringilla. Donec nunc. ",
            },
            {
               user: "C963564@constellation.com",
               date: "07/20/2024",
               content:
                  "Lorem ipsum dolor sit amet consectetur. Mi nibh varius tortor lorem turpis id. Ultricies vitae rhoncus ac aliquam egestas. Pellentesque a libero in et ultricies vitae.",
            },
            {
               user: "C963564@constellation.com",
               date: "07/21/2024",
               content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula eros vitae odio elementum tempor. Cras eleifend ornare nunc. Nunc fringilla arcu nec bibendum venenatis. Duis tincidunt fringilla justo, sit amet tempus lacus blandit et. ",
            },
         ],
      },
   ]);

   const handleChangeTheme = (theme: MUITheme) => {
      setSelectedTheme(theme);
   };
   const handleChangeTab = (tab: DrawerTabs) => {
      setSelectedTab(tab);
   };

   const handleChangeSelectedItemDetail = (itemName: string) => {
      setSelectedItemDetail(itemName);
   };

   const handleSetIsLoading = (loadingState: boolean) =>
      setIsLoading(loadingState);

   const handleAddIncidentNote = (newNote: Note) => {
      // find selected item then update notes
      const selectedItemIndex = incidents.findIndex(
         (inc) => inc.number === selectedItemDetail
      );

      setIncidents((prev) => {
         const updatedIncidents = [...prev];

         updatedIncidents[selectedItemIndex].notes = [
            ...prev[selectedItemIndex].notes,
            newNote,
         ];

         return updatedIncidents;
      });
   };

   const handleAddRequestNote = (newNote: Note) => {
      // find selected item then update notes
      const selectedItemIndex = requests.findIndex(
         (req) => req.number === selectedItemDetail
      );

      setRequests((prev) => {
         const updatedRequests = [...prev];

         updatedRequests[selectedItemIndex].notes = [
            ...prev[selectedItemIndex].notes,
            newNote,
         ];

         return updatedRequests;
      });
   };

   const handleChangeSeverityFilter = (severity: Severity) =>
      setSeverityFilter(severity);

   return (
      <AppContext.Provider
         value={{
            selectedTheme,
            handleChangeTheme,
            selectedTab,
            handleChangeTab,
            selectedItemDetail,
            handleChangeSelectedItemDetail,
            isLoading,
            handleSetIsLoading,
            incidents,
            handleAddIncidentNote,
            requests,
            handleAddRequestNote,
            severityFilter,
            handleChangeSeverityFilter,
         }}
      >
         {children}
      </AppContext.Provider>
   );
};

export default AppContextProvider;

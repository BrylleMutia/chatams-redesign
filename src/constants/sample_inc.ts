export type Incident = {
   number: string;
   state: IncidentState;
   desc: string;
   notes: Note[];
};

export type Note = {
   user: string;
   date: string;
   content: string;
};

export type IncidentState = "new" | "inprogress" | "onhold" | "resolved";

export const SAMPLE_INCS: Incident[] = [
   {
      number: "INC6159676641",
      state: "new",
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
      number: "INC4509783111",
      state: "onhold",
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
];

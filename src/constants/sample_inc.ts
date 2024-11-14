export type Incident = {
   number: string;
   state: IncidentState;
   desc: string;
};

export type IncidentState = "new" | "inprogress" | "onhold" | "resolved";

export const SAMPLE_INCS: Incident[] = [
   {
      number: "INC6159676641",
      state: "new",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi velit, viverra at libero eget, auctor aliquam purus. Fusce non metus id erat efficitur scelerisque. ",
   },
   {
      number: "INC5621251589",
      state: "new",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi velit, viverra at libero eget, auctor aliquam purus. Fusce non metus id erat efficitur scelerisque. ",
   },
   {
      number: "INC4509783111",
      state: "new",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi velit, viverra at libero eget, auctor aliquam purus. Fusce non metus id erat efficitur scelerisque. ",
   },
   {
      number: "INC1662221199",
      state: "inprogress",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi velit, viverra at libero eget, auctor aliquam purus. Fusce non metus id erat efficitur scelerisque. ",
   },
   {
      number: "INC9078456730",
      state: "inprogress",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi velit, viverra at libero eget, auctor aliquam purus. Fusce non metus id erat efficitur scelerisque. ",
   },
   {
      number: "INC4509783111",
      state: "onhold",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi velit, viverra at libero eget, auctor aliquam purus. Fusce non metus id erat efficitur scelerisque. ",
   },
   {
      number: "INC4546711991",
      state: "onhold",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi velit, viverra at libero eget, auctor aliquam purus. Fusce non metus id erat efficitur scelerisque. ",
   },
   {
      number: "INC1122545589",
      state: "resolved",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi velit, viverra at libero eget, auctor aliquam purus. Fusce non metus id erat efficitur scelerisque. ",
   },
];

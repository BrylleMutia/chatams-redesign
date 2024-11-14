export type RequestItem = {
   number: string;
   state: RequestState;
   desc: string;
};

export type RequestState = "new" | "inprogress" | "onhold" | "resolved";

export const SAMPLE_RITMS: RequestItem[] = [
   {
      number: "RITM7589293144",
      state: "new",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi velit, viverra at libero eget, auctor aliquam purus. Fusce non metus id erat efficitur scelerisque. ",
   },
   {
      number: "RITM5612121135",
      state: "inprogress",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi velit, viverra at libero eget, auctor aliquam purus. Fusce non metus id erat efficitur scelerisque. ",
   },
   {
      number: "RITM3576771111",
      state: "inprogress",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi velit, viverra at libero eget, auctor aliquam purus. Fusce non metus id erat efficitur scelerisque. ",
   },
   {
      number: "RITM7990011226",
      state: "onhold",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi velit, viverra at libero eget, auctor aliquam purus. Fusce non metus id erat efficitur scelerisque. ",
   },
   {
      number: "RITM7990712894",
      state: "onhold",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi velit, viverra at libero eget, auctor aliquam purus. Fusce non metus id erat efficitur scelerisque. ",
   },
   {
      number: "RITM5688010281",
      state: "resolved",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi velit, viverra at libero eget, auctor aliquam purus. Fusce non metus id erat efficitur scelerisque. ",
   },
   {
      number: "RITM7098110113",
      state: "resolved",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi velit, viverra at libero eget, auctor aliquam purus. Fusce non metus id erat efficitur scelerisque. ",
   },
   {
      number: "RITM9087221108",
      state: "resolved",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi velit, viverra at libero eget, auctor aliquam purus. Fusce non metus id erat efficitur scelerisque. ",
   },
];

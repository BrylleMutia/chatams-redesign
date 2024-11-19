import React, { useEffect } from "react";
import type { Note } from "../constants/sample_notes";

const useScrollIntoView = (
   ref: React.RefObject<HTMLDivElement>,
   notes: Note[] | null
) => {
   useEffect(() => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
   }, [notes]);
};

export { useScrollIntoView };

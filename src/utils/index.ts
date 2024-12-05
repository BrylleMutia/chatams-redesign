import React, { useEffect } from "react";
import type { Incident } from "../constants/sample_inc";

const useScrollIntoView = (
   ref: React.RefObject<HTMLDivElement>,
   incidents: Incident[] | null
) => {
   useEffect(() => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
   }, [incidents]);
};

export { useScrollIntoView };

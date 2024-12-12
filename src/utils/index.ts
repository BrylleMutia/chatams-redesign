import React, { useEffect } from "react";
import type { Incident, Severity } from "../context/types";

const useScrollIntoView = (
   ref: React.RefObject<HTMLDivElement>,
   incidents: Incident[] | null
) => {
   useEffect(() => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
   }, [incidents]);
};

const filterItemsBySeverity = (items: Incident[], severity: Severity) => {
   if (severity === "ALL") return items;
   return items.filter((item) => item.severity === severity);
};

export { useScrollIntoView, filterItemsBySeverity };

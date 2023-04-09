import { CSSProperties, ReactNode } from "react";

export interface PropTypes {
  children: ReactNode;
  style?: CSSProperties;
  scrollDirection?: "row" | "column";
}

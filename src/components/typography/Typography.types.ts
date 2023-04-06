import { ReactNode } from "react";

export interface PropTypes {
  variant: TypographyVariant;
  weight?: TypographyWeight;
  children: ReactNode;
}

export enum TypographyVariant {
  H1 = "H1",
  H2 = "H2",
  H3 = "H3",
  H4 = "H4",
  H5 = "H5",
  PARAGRAPH = "p",
  SPAN = "span",
  SMALL = "small",
}

export enum TypographyWeight {
  LIGHT = 300,
  REGULAR = 400,
  MEDIUM = 500,
  BOLD = 700,
}

export const TypographySizes = {
  [TypographyVariant.H1]: "3rem",
  [TypographyVariant.H2]: "2.5rem",
  [TypographyVariant.H3]: "2rem",
  [TypographyVariant.H4]: "1.5rem",
  [TypographyVariant.H5]: "1.25rem",
  [TypographyVariant.PARAGRAPH]: "1rem",
  [TypographyVariant.SPAN]: "1rem",
  [TypographyVariant.SMALL]: "0.75rem",
};

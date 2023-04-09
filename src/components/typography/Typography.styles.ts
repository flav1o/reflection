import styled from "@emotion/styled";
import {
  TypographySizes,
  TypographyVariant,
  TypographyWeight,
} from "./Typography.types";

const Text = styled("p")<{
  variant: TypographyVariant;
  weight?: TypographyWeight;
  color?: string;
}>`
  font-size: ${(props) =>
    TypographySizes[props.variant] ??
    TypographySizes[TypographyVariant.PARAGRAPH]};
  font-weight: ${(props) =>
    props?.weight !== undefined
      ? typeof props.weight === "number"
        ? props.weight
        : TypographyWeight[props.weight]
      : TypographyWeight.REGULAR};
  color: ${(props) => props?.color};
`;



export default { Text };

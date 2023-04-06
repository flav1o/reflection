import styled from "@emotion/styled";
import {
  TypographySizes,
  TypographyVariant,
  TypographyWeight,
} from "./Typography.types";

const Text = styled("p")<{
  variant: TypographyVariant;
  weight?: TypographyWeight;
}>`
  font-size: ${(props) =>
    TypographySizes[props.variant] ??
    TypographySizes[TypographyVariant.PARAGRAPH]};
  font-weight: ${(props) =>
    (props?.weight && TypographyWeight[props?.weight]) ??
    TypographyWeight.REGULAR};
`;

export default { Text };

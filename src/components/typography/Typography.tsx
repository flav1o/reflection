import React, { FC } from "react";
import S from "./Typography.styles";
import { PropTypes } from "./Typography.types";

const Typography: FC<PropTypes> = ({ variant, weight, color, content }) => {
  return (
    <S.Text variant={variant} weight={weight} color={color}>
      {content}
    </S.Text>
  );
};

export { Typography };

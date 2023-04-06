import React, { FC } from "react";
import S from "./Typography.styles";
import { PropTypes } from "./Typography.types";

const Typography: FC<PropTypes> = ({ children, variant, weight }) => {
  return (
    <S.Text variant={variant} weight={weight}>
      {children}
    </S.Text>
  );
};

export { Typography };

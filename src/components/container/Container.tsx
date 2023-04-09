import React, { FC } from "react";
import { PropTypes } from "./Container.types";
import S from "./Container.styles";

const Container: FC<PropTypes> = ({ children, style }) => {
  return <S.Container style={style}>{children}</S.Container>;
};

export { Container };

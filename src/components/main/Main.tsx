import React, { FC } from "react";
import { PropTypes } from "./Main.types";
import S from "./Main.styles";

const Main: FC<PropTypes> = ({ children, style }) => {
  return <S.MainWrapper style={style}>{children}</S.MainWrapper>;
};

export { Main };

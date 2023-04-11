import React, { FC } from "react";
import { PropTypes } from "./Main.types";
import S from "./Main.styles";

const Main: FC<PropTypes> = ({ children, style, disablePadding }) => {
  return (
    <S.MainWrapper style={style} disablePadding={disablePadding}>
      {children}
    </S.MainWrapper>
  );
};

export { Main };

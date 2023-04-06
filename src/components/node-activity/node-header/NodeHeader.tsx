import React, { FC } from "react";
import { palette } from "@/core/theme";
import { PropTypes } from "./NodeHeader.types";
import S from "./NodeHeader.styles";

const NodeHeader: FC<PropTypes> = ({ event, isFlagged }) => {
  const { primary } = palette;

  return (
    <S.HeaderContainer color={primary[40]} isFlagged={isFlagged}>
      <S.HeaderSpan>{event}</S.HeaderSpan>
    </S.HeaderContainer>
  );
};

export { NodeHeader };

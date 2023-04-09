import React, { FC } from "react";
import S from "./DraggableContainer.styles";
import ScrollContainer from "react-indiana-drag-scroll";
import { PropTypes } from "./DraggableContainer.types";

const DraggableContainer: FC<PropTypes> = ({
  style,
  children,
  scrollDirection,
}) => {
  return (
    <S.DragContainer
      className="scroll-container"
      style={{ ...style, flexDirection: scrollDirection }}
    >
      {children}
    </S.DragContainer>
  );
};

export { DraggableContainer };

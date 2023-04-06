import React, { FC } from "react";
import { NativeButton } from "./IconButton.style";
import { PropTypes } from "./IconButton.types";

const IconButton: FC<PropTypes> = ({ icon, onClick }) => {
  return <NativeButton onClick={onClick}>{icon}</NativeButton>;
};

export { IconButton };

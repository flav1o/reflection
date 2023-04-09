import React, { FC } from "react";
import { PropTypes } from "./Skeleton.types";
import { SkeletonTheme } from "react-loading-skeleton";

const SkeletonWrapper: FC<PropTypes> = ({ children }) => {
  return (
    <SkeletonTheme baseColor="#e2e2e2" highlightColor="#bebdbd">
      {children}
    </SkeletonTheme>
  );
};

export { SkeletonWrapper };

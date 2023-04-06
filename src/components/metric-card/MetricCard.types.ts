import { ReactNode } from "react";

export interface PropTypes {
  metricValue: number | string;
  metricName: string;
  component: ReactNode;
}

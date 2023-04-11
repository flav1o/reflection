import styled from "@emotion/styled";
import { Line } from "react-chartjs-2";

const NewSessionChart = styled(Line)`
  margin-right: -60vw;
  margin-left: -9px;
  height: 10vh;
  margin-bottom: -9px;

  @media only screen and (min-width: 768px) {
    margin-right: -3px;
    margin-left: -9px;
    margin-bottom: -9px;
  }
`;

export default { NewSessionChart };

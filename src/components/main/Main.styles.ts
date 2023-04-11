import styled from "@emotion/styled";
import { palette } from "@/core/theme";

const { background } = palette;

const MainWrapper = styled("div")<{
  disablePadding?: boolean;
}>`
  background-color: ${background[60]};
  padding: ${(props) => (props?.disablePadding ? "0vw" : "2vw")};
`;

export default { MainWrapper };

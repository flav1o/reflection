import styled from "@emotion/styled";
import { palette } from "@/core/theme";

const { background } = palette;

const MainWrapper = styled.main`
  background-color: ${background[60]};
  padding: 2vw;
`;

export default { MainWrapper };

import styled from "@emotion/styled";
import { palette } from "@/core/theme";

const { background } = palette;

const MainWrapper = styled.main`
  background-color: ${background.light[60]};
  height: 100%;
  padding: 2vw 2vw;
`;

export default { MainWrapper };

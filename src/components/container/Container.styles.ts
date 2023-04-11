import styled from "@emotion/styled";
import { palette } from "@/core/theme";

const { background } = palette;

const Container = styled.div`
  background-color: ${background[90]};
  border: 1px solid #e5e5e5;
  border-radius: 15px;
`;

export default { Container };

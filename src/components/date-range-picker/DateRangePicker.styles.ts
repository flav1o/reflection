import styled from "@emotion/styled";
import { palette } from "@/core/theme";

const { background } = palette;

const DatePickerWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1vh;
  background-color: ${background[90]};
  border-radius: 15px;
  border: 1px solid #e5e5e5;
`;

export default { DatePickerWrapper };

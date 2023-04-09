import styled from "@emotion/styled";
import { palette } from "@/core/theme";

const { background, primary } = palette;

const NativeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1vh;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  background-color: transparent;
  transition: 0.2s;

  &:active {
    background-color: ${primary[90]};
    transform: scale(0.9);
  }

  &:hover {
    background-color: ${primary[90]};
    color: ${background[90]};
  }
`;

export { NativeButton };

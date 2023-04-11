import styled from "@emotion/styled";
import { palette } from "@/core/theme";

const { background, danger } = palette;

const HeaderContainer = styled("div")<{ isFlagged: boolean }>`
  width: 10vw;
  height: 5vh;

  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ color }) => color || "#2B9EB3"};
  border-radius: 15px;
  font-size: 0.8rem;
  background-color: ${({ isFlagged }) =>
    isFlagged ? danger[10] : background[90]};
`;

const HeaderSpan = styled.span`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  color: ${palette.primary[90]};

  &:active {
    color: ${palette.primary[90]};
  }

  &:after {
    content: "";
    width: 0px;
    height: 1px;
    background-color: ${palette.primary[90]};
    transition: 0.2s;
  }

  &:hover:after {
    width: 100%;
  }

  &:active:after {
    background-color: ${palette.primary[60]};
  }
`;

export default { HeaderContainer, HeaderSpan };

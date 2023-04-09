import styled from "@emotion/styled";
import { palette } from "@/core/theme";

const { background } = palette;

const BottomSessionWrapper = styled.div`
  height: 5vh;
  display: grid;
  grid-template-columns: 30vw 8vw;
  gap: 1rem;
  position: fixed;
  bottom: 2vh;
  left: 50%;
  z-index: 2;
  transform: translate(-50%);
`;

const GridItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${background[90]};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));
  border-radius: 5px;
  padding: 0vh 1vw;
`;

const BanIconWrapper = styled.span`
  cursor: pointer;
  transform: rotate(90deg);
  transition-duration: 0.2s;

  &:hover {
    color: red;
  }

  &:active {
    transform: rotate(20deg) scale(0.9);
  }
`;

const UserWrapper = styled.span`
  display: flex;
  gap: 0.5vw;
`;

export default {
  BottomSessionWrapper,
  BanIconWrapper,
  GridItem,
  UserWrapper,
};

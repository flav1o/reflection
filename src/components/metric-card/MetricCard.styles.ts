import styled from "@emotion/styled";
import { palette } from "@/core/theme";
import Skeleton from "react-loading-skeleton";

const { background } = palette;

const Card = styled.div`
  min-width: 80vw;
  height: 20vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #e5e5e5;
  border-radius: 15px;
  background-color: ${background[90]};
  overflow: hidden;

  & p:nth-of-type(1) {
    font-size: 1.2rem;
  }

  & p:nth-of-type(2) {
    margin-top: 0.5vh;
    font-size: 0.8rem;
    color: #8a909d;
  }

  @media only screen and (max-width: 600px) {
    justify-content: flex-start;
  }

  @media only screen and (min-width: 600px) {
    min-width: 30vw;
  }

  @media only screen and (min-width: 768px) {
    min-width: 20vw;
  }
`;

const CardSkeleton = styled(Skeleton)`
  min-width: 80vw;
  height: 23vh;
  display: flex;

  @media only screen and (min-width: 768px) {
    min-width: 20vw;
    height: 20vh;
  }
`;

const Content = styled.div`
  padding: 2vh 4vw;

  @media only screen and (max-width: 600px) {
    padding: 2vw;
  }

  @media only screen and (min-width: 600px) {
    padding: 1vw;
  }
`;

const Component = styled.div`
  width: 20vw;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default { Card, CardSkeleton, Content, Component };


import styled from "@emotion/styled";
import { palette } from "@/core/theme";
import Skeleton from "react-loading-skeleton";

const { background } = palette;

const Card = styled.div`
  min-width: 80vw;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2vh 4vw;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  background-color: ${background[90]};

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
    padding: 2vw;
  }

  @media only screen and (min-width: 600px) {
    min-width: 30vw;
    min-height: 21vh;
    padding: 1vw;
  }

  @media only screen and (min-width: 768px) {
    min-width: 20vw;
    height: 20vh;
  }

  @media only screen and (min-width: 1024px) {
    height: 20vh;
  }

  @media only screen and (min-width: 1440px) {
    height: 20vh;
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

export default { Card, CardSkeleton };

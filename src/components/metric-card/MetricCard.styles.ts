import styled from "@emotion/styled";
import { palette } from "@/core/theme";

const { background } = palette;

const Card = styled.div`
  width: 17vw;
  height: 23vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.3vw 1.3vw;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  background-color: ${background.light[90]};
  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.1));

  & p:nth-of-type(1) {
    font-size: 1.3rem;
  }

  & p:nth-of-type(2) {
    margin-top: 0.5vh;
    color: #8a909d;
  }
`;

export default { Card };

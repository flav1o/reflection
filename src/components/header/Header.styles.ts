import styled from "@emotion/styled";

const HeaderWrapper = styled.header`
  width: 100%;
  display: grid;

  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 30% 70%;
  }
`;

const DatePickerWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 2vh;

  @media only screen and (min-width: 1024px) {
    margin-top: 0;
    justify-content: flex-end;
  }
`;

export default { HeaderWrapper, DatePickerWrapper };

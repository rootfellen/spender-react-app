import styled from "styled-components";

export const ExpensesList = styled.div`
  margin: 6px 12px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const ExpenseListEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 36px;

  label {
    padding-top: 16px;
  }
`;
export const ExpenseListEmptyImg = styled.img`
  max-height: 360px;
  width: 100%;

  @media screen and (max-width: 1024px) {
    max-height: 320px;
  }
  @media screen and (max-width: 512px) {
    max-height: 240px;
  }
`;

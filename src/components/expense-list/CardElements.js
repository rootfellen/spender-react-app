import styled from "styled-components";
export const CardWrap = styled.div`
  background-color: #fff;
  padding: 12px;
  margin: 2px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CardImgContainer = styled.img`
  max-width: 40px;
  width: 100%;
  @media screen and (max-width: 1024px) {
    max-width: 32px;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 12px;
`;
export const CardInfoLabel = styled.label`
  font-size: 20px;
  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }
  @media screen and (max-width: 512px) {
    font-size: 16px;
  }
`;
export const CardInfoTime = styled.label`
  color: #808080;
  font-size: 12px;
  @media screen and (max-width: 1024px) {
    font-size: 10px;
  }
`;
export const CardInfoRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;
export const CardDelete = styled.a`
  cursor: pointer;
`;
export const CardAmount = styled.label`
  font-size: 20px;
  font-weight: 500;
  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }
  @media screen and (max-width: 512px) {
    font-size: 16px;
  }
`;
export const CardDeleteIcon = styled.img`
  max-width: 18px;
  width: 100%;
`;

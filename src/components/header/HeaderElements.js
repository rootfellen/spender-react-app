import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 50%;
  margin: auto;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }

  @media screen and (max-width: 512px) {
    width: 100%;
  }
`;

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  margin: 36px 12px 6px;
`;

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  font-size: 32px;
  font-weight: 500;

  @media screen and (max-width: 1024px) {
    font-size: 28px;
  }
  @media screen and (max-width: 512px) {
    font-size: 24px;
  }
`;

export const HeaderIcon = styled.img`
  display: flex;
  align-items: center;
  margin-left: 6px;
  max-width: 30px;
  width: 100%;
`;

export const HeaderLogoText = styled.div`
  font-size: 1.7rem;
  display: flex;
  align-items: center;
`;
export const HeaderButton = styled.div`
  font-size: 20px;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 6px;
  padding: 5px 8px;

  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }

  @media screen and (max-width: 512px) {
    font-size: 16px;
  }
`;
export const HeaderButtonLink = styled.a`
  display: flex;
  text-decoration: none;
  color: #000;
`;
export const HeaderButtonIcon = styled.img`
  max-width: 25px;
  width: 100%;
  margin-right: 6px;
`;

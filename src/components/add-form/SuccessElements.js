import styled from "styled-components";
import { Link } from "react-router-dom";
export const ModalInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ModalImg = styled.img`
  padding: 20px 0px;
  height: 360px;

  @media screen and (max-width: 1024px) {
    height: 320px;
  }
  @media screen and (max-width: 512px) {
    height: 240px;
  }
`;
export const ModalBtn = styled(Link)`
  border: 1px solid #000;
  padding: 4px 8px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  text-decoration: none;
  color: #001f3f;

  &hover {
    background-color: #fff;
  }
`;
export const ModalBtnImgIcon = styled.img`
  max-width: 15px;
  width: 100%;
  margin-right: 3px;
`;
export const ModalLabel = styled.div``;

export const ModalBtnText = styled.div`
  text-decoration: none;
`;

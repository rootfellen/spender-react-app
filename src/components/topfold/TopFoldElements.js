import styled from "styled-components";
import { Link } from "react-router-dom";

export const TopFoldContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 6px 12px;
  padding: 12px 0px;
  align-items: center;
`;

export const TopFoldWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`;
export const TopFoldSearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  background-color: #fff;
  border-radius: 12px;
`;
export const SearchIcon = styled.img`
  max-width: 20px;
  width: 100%;
  margin-left: 10px;
`;
export const SearchInput = styled.input`
  width: 80%;
  outline: none;
  border: none;
  padding: 9px 0px;
  margin-left: 6px;
  background-color: #fff;
`;

export const TopFoldBtnLink = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 6px;
  padding: 5px 10px;
  text-decoration: none;
  color: #001f3f;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #000;
    background-color: #fff;
    transition: 0.3s ease-in-out;
  }
`;
export const TopFoldButtonIcon = styled.img`
  max-width: 20px;
  width: 100%;
  margin-right: 6px;
`;
export const TopFoldBtnLabel = styled.div`
  font-size: 20px;
`;

// AddTopFold

export const AddTopFold = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`;
export const AddTopFoldBackBtn = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 18px;
  border: 1px solid #000;
  padding: 4px 8px 4px 5px;
  border-radius: 6px;
  text-decoration: none;
  color: #001f3f;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: #82e9e7;
    transition: 0.3s ease-in-out;
  }
`;
export const AddTopFoldLeftIcon = styled.img`
  display: flex;
  justify-content: center;
`;
export const AddTopFoldBackBtnLabel = styled.div`
  text-decoration: none;
`;
export const AddTopFoldCancelBtn = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
  border: 1px solid #000;
  padding: 5px 8px;
  border-radius: 6px;
  color: #001f3f;
  transition: 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: #82e9e7;
    transition: 0.3s ease-in-out;
  }
`;
export const AddTopFoldCancelIcon = styled.img`
  max-width: 20px;
  width: 100%;
  margin-right: 4px;
`;
export const AddTopFoldCancelBtnLabel = styled.div`
  text-decoration: none;
`;

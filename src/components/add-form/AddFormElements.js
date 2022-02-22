import styled from "styled-components";

export const AddFormWrap = styled.div`
  background: #71ccca;
  box-shadow: 20px 20px 60px #60adac, -20px -20px 60px #82ebe8;
  margin: 6px 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  flex: 1;
  min-height: 60vh;
`;

export const FormItem = styled.div`
  margin: 12px 0px;
  width: 70%;
  padding: 4px;
  border-radius: 6px;
  background-color: #fff;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;
export const FormItemTitle = styled.label`
  background-color: #d3d3d3;
  padding: 2px 12px;
  border-radius: 0px 4px 4px 0px;
  cursor: pointer;
`;
export const FormItemInputTitle = styled.input`
  font-size: 16px;
  border: none;
  outline: none;
  width: 85%;
  padding-left: 6px;
  @media screen and (max-width: 1024px) {
    width: 70%;
  }
`;
export const FormItemInputAmount = styled.input`
  font-size: 16px;
  border: none;
  outline: none;
  width: 80%;
  padding-left: 6px;
  @media screen and (max-width: 1024px) {
    width: 50% !important;
  }
`;
export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  @media screen and (max-width: 1024px) {
    width: 80%;
  }
`;
export const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  width: 40%;
`;
export const CategoryListLabel = styled.label`
  cursor: pointer;
  padding-left: 4px;
  &hover {
    cursor: pointer;
  }
`;
export const CategoryListIcon = styled.img`
  max-width: 20px;
  width: 100%;
`;

export const CategoryListWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  margin: 12px 0px;
  border-radius: 6px;
  padding: 4px;
  cursor: pointer;
`;
export const CategoryListContainer = styled.div`
  cursor: pointer;
  display: flex;
  position: absolute;
  top: 50px;
  width: 100%;
  flex-direction: column;
  background-color: #fff;
`;
export const CategoryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    max-width: 20px;
    width: 100%;
    margin-right: 20px;
  }
`;

export const CategoryItemLabel = styled.label`
  display: flex;
  cursor: pointer;
  padding: 8px 0px;
  margin-left: 10px;
  width: 98px;
`;
export const CategoryAddButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: flex-end;
  border: 1px solid #000;
  align-self: flex-end;
  padding: 2px 8px;
  border-radius: 6px;
`;
export const CategoryAddButtonLabel = styled.div``;
export const CategoryAddButtonIcon = styled.img`
  max-width: 16px;
  width: 100%;
  padding-left: 4px;
`;

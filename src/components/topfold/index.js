import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchExpense } from "../../redux/actions/expenses";
import {
  TopFoldSearchIconImg,
  TopFoldButtonIconImg,
  TopFoldBackIconImg,
  TopFoldCancelIconImg,
} from "../Data";
import {
  TopFoldBtnLink,
  TopFoldContainer,
  TopFoldWrap,
  TopFoldSearchBar,
  SearchIcon,
  SearchInput,
  TopFoldButtonIcon,
  TopFoldBtnLabel,
  AddTopFold,
  AddTopFoldBackBtn,
  AddTopFoldLeftIcon,
  AddTopFoldBackBtnLabel,
  AddTopFoldCancelBtn,
  AddTopFoldCancelIcon,
  AddTopFoldCancelBtnLabel,
} from "./TopFoldElements";

const TopFold = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const handleQuery = (e) => {
    setQuery(e.target.value);
    dispatch(searchExpense(e.target.value));
  };
  return (
    <TopFoldContainer>
      {window.location.pathname === "/" ? (
        <TopFoldWrap>
          <TopFoldSearchBar>
            <SearchIcon
              src={TopFoldSearchIconImg.img.default}
              alt={TopFoldSearchIconImg.alt}
            />
            <SearchInput
              placeholder="search for expenses"
              value={query}
              onChange={(e) => handleQuery(e)}
            />
          </TopFoldSearchBar>
          <TopFoldBtnLink to="/add-expenses">
            <TopFoldButtonIcon
              src={TopFoldButtonIconImg.img.default}
              alt={TopFoldButtonIconImg.alt}
            />
            <TopFoldBtnLabel>Add</TopFoldBtnLabel>
          </TopFoldBtnLink>
        </TopFoldWrap>
      ) : (
        <AddTopFold>
          <AddTopFoldBackBtn to="/">
            <AddTopFoldLeftIcon
              src={TopFoldBackIconImg.img.default}
              alt={TopFoldBackIconImg.alt}
            />
            <AddTopFoldBackBtnLabel>Back</AddTopFoldBackBtnLabel>
          </AddTopFoldBackBtn>
          <AddTopFoldCancelBtn to="/">
            <AddTopFoldCancelIcon
              src={TopFoldCancelIconImg.img.default}
              alt={TopFoldCancelIconImg.alt}
            />
            <AddTopFoldCancelBtnLabel>Cancel</AddTopFoldCancelBtnLabel>
          </AddTopFoldCancelBtn>
        </AddTopFold>
      )}
    </TopFoldContainer>
  );
};

export default TopFold;

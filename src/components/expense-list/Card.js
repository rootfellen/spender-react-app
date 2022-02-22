import React from "react";
import { CardDeleteIconImg } from "../Data";
import {
  CardWrap,
  CardImgContainer,
  CardInfo,
  CardInfoLabel,
  CardInfoTime,
  CardInfoRight,
  CardDelete,
  CardAmount,
  CardDeleteIcon,
} from "./CardElements";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../../redux/actions/expenses";

const Card = ({ item, notifySuccess }) => {
  const time = moment(item.createdAt).fromNow();
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteExpense(item));
    notifySuccess();
  };
  return (
    <CardWrap
      style={{ borderRight: `6px solid ${item.category.color}` }}
      key={item.category.id}
    >
      <CardImgContainer src={item.category.icon} alt={item.category.title} />
      <CardInfo>
        <CardInfoLabel>{item.title}</CardInfoLabel>
        <CardInfoTime>{time}</CardInfoTime>
      </CardInfo>
      <CardInfoRight>
        <CardDelete onClick={handleDelete}>
          <CardDeleteIcon
            src={CardDeleteIconImg.img.default}
            alt={CardDeleteIconImg.alt}
          />
        </CardDelete>
        <CardAmount>${item.amount}</CardAmount>
      </CardInfoRight>
    </CardWrap>
  );
};

export default Card;

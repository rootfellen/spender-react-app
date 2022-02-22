import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import { ExpensesEmptyImg } from "../Data";
import {
  ExpensesList,
  ExpenseListEmpty,
  ExpenseListEmptyImg,
} from "./ExpenseListElements";
import { toast, ToastContainer } from "react-toastify";

const ExpenseList = () => {
  const { expenseList: list, query } = useSelector((state) => state.expenses);
  const filteredList = list.filter((item) => item.title.includes(query));
  const notifySuccess = () => toast.success("Expense has been deleted!");
  return (
    <ExpensesList>
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      {filteredList.length ? (
        filteredList.map((item) => (
          <Card item={item} notifySuccess={notifySuccess} />
        ))
      ) : (
        <ExpenseListEmpty>
          <ExpenseListEmptyImg
            src={ExpensesEmptyImg.img.default}
            alt={ExpensesEmptyImg.alt}
          />
          <label>Uh Oh! Your expense list is empty!</label>
        </ExpenseListEmpty>
      )}
    </ExpensesList>
  );
};

export default ExpenseList;

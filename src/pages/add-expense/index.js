import React from "react";
import AddForm from "../../components/add-form";
import TopFold from "../../components/topfold";

import { AddExpenseWrap } from "./AddExpenseElements";

const AddExpense = () => {
  return (
    <AddExpenseWrap>
      <TopFold />
      <AddForm />
    </AddExpenseWrap>
  );
};

export default AddExpense;

import React from "react";
import ExpenseList from "../../components/expense-list";
import TopFold from "../../components/topfold";

import { HomeContainer } from "./HomeElements";

const Home = () => {
  return (
    <HomeContainer>
      <TopFold />
      <ExpenseList />
    </HomeContainer>
  );
};

export default Home;

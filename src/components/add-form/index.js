import React from "react";
import { useState } from "react";
import { CategoryListIconImg, CategoryAddButtonIconImg } from "../Data";
import {
  AddFormWrap,
  FormItem,
  FormItemInputTitle,
  FormItemInputAmount,
  FormItemTitle,
  CategoryContainer,
  CategoryList,
  CategoryListLabel,
  CategoryListIcon,
  CategoryListWrap,
  CategoryListContainer,
  CategoryItem,
  CategoryAddButton,
  CategoryAddButtonLabel,
  CategoryAddButtonIcon,
  CategoryItemLabel,
} from "./AddFormElements";
import { addExpense } from "../../redux/actions/expenses";
import { categories } from "../../categories";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SuccessModal from "./success";

const AddForm = () => {
  const cat = categories;
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState();
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setAmount("");
      return;
    }
    setAmount(val);
  };

  const handleCategory = (category) => {
    setCategory(category);
    setCategoryOpen(false);
  };
  const handleSubmit = () => {
    if (title === "" || amount === "" || !category) {
      const notify = () => toast("Please enter valid data !");
      notify();
      return;
    }
    const data = {
      title,
      amount,
      category,
      createdAt: new Date(),
    };
    dispatch(addExpense(data));
    setModalOpen(true);
  };
  return (
    <AddFormWrap>
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <SuccessModal isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
      <FormItem>
        <FormItemTitle>Title</FormItemTitle>
        <FormItemInputTitle
          placeholder="Give a name to your expense"
          value={title}
          onChange={(e) => handleTitle(e)}
        />
      </FormItem>
      <FormItem>
        <FormItemTitle>Amount $</FormItemTitle>
        <FormItemInputAmount
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => handleAmount(e)}
        />
      </FormItem>
      <CategoryContainer>
        <CategoryList>
          <CategoryListWrap onClick={() => setCategoryOpen(!categoryOpen)}>
            <CategoryListLabel>
              {category ? category.title : "Category"}
            </CategoryListLabel>
            <CategoryListIcon
              src={CategoryListIconImg.img.default}
              alt={CategoryListIconImg.alt}
            />
          </CategoryListWrap>
          {categoryOpen && (
            <CategoryListContainer>
              {cat.map((category) => (
                <CategoryItem
                  style={{ borderRight: `5px solid ${category.color}` }}
                  key={category.id}
                  onClick={() => handleCategory(category)}
                >
                  <CategoryItemLabel>{category.title}</CategoryItemLabel>
                  <img src={category.icon} alt={category.title} />
                </CategoryItem>
              ))}
            </CategoryListContainer>
          )}
        </CategoryList>
        <CategoryAddButton onClick={handleSubmit}>
          <CategoryAddButtonLabel>Add</CategoryAddButtonLabel>
          <CategoryAddButtonIcon
            src={CategoryAddButtonIconImg.img.default}
            alt={CategoryAddButtonIconImg.alt}
          />
        </CategoryAddButton>
      </CategoryContainer>
    </AddFormWrap>
  );
};

export default AddForm;

import React from "react";
import Modal from "react-modal";
import "./SuccessElements";
import { ModalSuccessImg, ModalBtnImg } from "../Data";
import {
  ModalImg,
  ModalBtn,
  ModalLabel,
  ModalInner,
  ModalBtnImgIcon,
  ModalBtnText,
} from "./SuccessElements";

const SuccessModal = ({ isModalOpen, setModalOpen }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#71ccca",
      borderRadius: "12px",
    },
  };
  return (
    <Modal isOpen={isModalOpen} style={customStyles}>
      <ModalInner>
        <ModalLabel>Expense Added Succesfully!</ModalLabel>
        <ModalImg src={ModalSuccessImg.img.default} alt={ModalSuccessImg.alt} />

        <ModalBtn to="/">
          <ModalBtnImgIcon
            src={ModalBtnImg.img.default}
            alt={ModalBtnImg.alt}
          />
          <ModalBtnText>Home</ModalBtnText>
        </ModalBtn>
      </ModalInner>
    </Modal>
  );
};

export default SuccessModal;

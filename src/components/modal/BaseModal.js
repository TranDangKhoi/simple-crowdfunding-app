import React, { useState } from "react";
import ReactModal from "react-modal";

const BaseModal = ({
  children,
  openModal,
  setOpenModal,
  overlayClassName,
  className,
}) => {
  return (
    <ReactModal
      isOpen={openModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      overlayClassName={`fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center ${className}`}
      className={`${className} p-10 relative outline-none bg-white w-full max-w-[521px] rounded-[20px] max-h-[90vh] overscroll-contain overflow-y-auto`}
    >
      <button
        className="absolute z-10 w-10 h-10 text-lg top-2 right-5 text-text3"
        onClick={() => setOpenModal(false)}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
      {children}
    </ReactModal>
  );
};

export default BaseModal;

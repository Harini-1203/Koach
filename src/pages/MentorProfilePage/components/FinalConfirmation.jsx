import React from 'react';
import Modal from './Modal';

const FinalConfirmation = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <p className="text-md py-10 px-3 text-[#001F54]">
        Thank you for booking the session with Jessica.
        Please check your email for the details.
      </p>
    </Modal>
  );
};

export default FinalConfirmation;

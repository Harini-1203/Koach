import React from 'react';
import Modal from './Modal';
import dayjs from 'dayjs';


const SessionDetails = ({ onNext, onBack,onClose,sessionInfo }) => {
    const formattedDate = sessionInfo.date
    ? dayjs(sessionInfo.date).format('dddd, MMMM D, YYYY') 
    : '';
  return (
    <Modal onClose={onClose}>
      <h2 className="text-lg font-bold text-[#2D488F] mb-4">Session Details</h2>
      <p className="mb-2">
        Your session with Jessica has been booked on:
        <br />
        <strong>{formattedDate} @ {sessionInfo.time}</strong>
      </p>
      <p className="mb-6 text-blue-700 underline">
        Meeting Link: https://meet.google.com/xvw-ngwo-sww
      </p>
      <button
        onClick={onNext}
        className="w-full bg-[#2D488F] text-white font-bold py-3 rounded-md hover:bg-[#1f2e51]"
      >
        Confirm
      </button>
      <button
        onClick={onBack}
        className="w-full text-center mt-2 text-[#2d488f]  underline text-sm"
      >
        Edit
      </button>
    </Modal>
  );
};

export default SessionDetails;

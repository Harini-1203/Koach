import React from 'react';
import Modal from './Modal';

const PaymentDetails = ({ onNext,onClose }) => {
  return (
    <Modal onClose={onClose}>
      <h2 className="text-2xl font-bold text-[#2D488F] mb-6">Payment details</h2>
      <div className="grid grid-cols-2 gap-5  mb-4">
        <div>
          <label className="text-sm font-bold  text-[#001F54]">Name on card</label>
          <input className="w-full border border-1 border-[#001F54] py-2 px-3 rounded"  />
        </div>
        <div>
          <label className="text-sm font-bold  text-[#001F54]">Expiry</label>
          <input className="w-full border border-1 border-[#001F54] py-2 px-3 rounded"  />
        </div>
        <div className="">
          <label className="text-sm font-bold  text-[#001F54]">Card number</label>
          <input className="w-full border border-1 border-[#001F54] py-2 px-3 rounded"  />
        </div>
        <div className="">
          <label className="text-sm font-bold  text-[#001F54]">CVV</label>
          <input className="w-full border border-1 border-[#001F54] py-2 px-3 rounded"  />
        </div>
      </div>

      <div className="text-md  text-[#001F54] font-bold text-right my-10">
        <div className='flex justify-between p-2' >Subtotal: <div className='font-bold'>$123.24</div></div>
        <div className='flex justify-between p-2' >Sales tax: <div className='font-bold'>$7.45</div></div>
        <div className='border-t-2 border-[#001f54]  mt-2 flex justify-between p-2' >Total: <div className='font-bold'>$131.69</div></div>
      </div>

      <button
        onClick={onNext}
        className="w-full bg-[#2D488F] text-white font-bold py-3 rounded-md hover:bg-[#1f2e51]"
      >
        Place your order
      </button>
    </Modal>
  );
};

export default PaymentDetails;

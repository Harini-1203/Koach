import React from 'react'

const Modal = ({children,onClose}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#EDF0F6] bg-opacity-40 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md rounded-xl p-6 relative shadow-xl">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-black">
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal
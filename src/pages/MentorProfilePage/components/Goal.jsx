import {React,useState} from 'react'
import Modal from './Modal'

const Goal = ({ onNext,onClose }) => {
    const [text,setText]=useState("");
  return (
    <Modal onClose={onClose} >
        <h2 className='text-lg font-bold text-[#2D488F]' >Goal of the Intro Call {'(15 mins.)'}</h2>
        <textarea className='h-80 placeholder-gray-500  w-full my-5 border border-1 border-[#2D488F] p-4'
            placeholder="What's your goal during this call?"
            value={text}
            onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button className="flex items-center justify-center px-16 w-full bg-[#2D488F] text-white p-4 font-bold  rounded-stext-m hover:bg-[#1f2e51]"
            onClick={onNext}
            >
            submit
        </button>
    </Modal>
  )
}

export default Goal
import {React,useState,useEffect} from 'react'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import Card from './Card';

import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const RightPanel = ({onOptClick,setSessionInfo }) => {
  const navigate = useNavigate();  
  const [value, setValue] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState("10:00 AM");
  const [selectedPlan, setSelectedPlan] = useState("starter");

    const handleBookClick = () => {
        const auth = getAuth();
        const user = auth.currentUser;
        if (!user) {
            navigate('/signup?redirect=/mentor/profile'); // Redirect unauthenticated users
            return;
        }
        if (value && selectedTime) {
            setSessionInfo({ date: value, time: selectedTime });
        }
  };


  const timeSlots = ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM"];
  return (
    <div className='flex flex-col items-center gap-5'>
        <Card padding="p-0">    
           <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar 
                    value={value} onChange={(newValue) => setValue(newValue)} 
                    sx={{
                        '.MuiPickersDay-root': {
                            color: '#2D488F',
                        },
                        '.MuiPickersCalendarHeader-label': {
                            color: '#2D488F',
                            fontWeight: 'bold',
                        },
                        '.MuiDayCalendar-weekDayLabel': {
                            color: '#2D488F',
                            fontWeight: '600',
                        },
                        '.MuiPickersDay-today': {
                            borderColor: '#2D488F',
                        },
                        '.MuiPickersDay-root.Mui-selected': {
                            backgroundColor: '#2D488F',
                            color: '#fff',
                            '&:hover': {
                            backgroundColor: '#1f2e51',
                            },
                        },
                        }}    
                    />
            </LocalizationProvider>
            </Card>
            <Card>
              <h2 className="text-m font-bold mb-5 text-[#2D488F]">Time Availability</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    className={`px-3 py-1  rounded-full text-sm ${
                      selectedTime === slot
                        ? "border border-[3.5px] border-[#2D488F]"
                        : ""
                    }`}
                    onClick={() => setSelectedTime(slot)}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </Card>
            <button className="flex items-center justify-center px-16 mx-auto bg-[#2D488F] text-white p-4 font-bold  rounded-lg text-m hover:bg-[#1f2e51]"
                onClick={()=>{
                    handleBookClick();
                    onOptClick();
                }}
            >
                Request Intro Call
            </button>
            <Card>
                {/* Mentorship Plans */}
                <div>
                    <h2 className="text-lg text-[#2D488F] font-bold mb-4">Mentorship Plans</h2>
                    <div className="flex gap-5 mb-4">
                    <button
                        className={`w-1/2 py-2 text-sm rounded-full font-medium ${
                        selectedPlan === "starter"
                            ? "border border-[#2D488F] border-[3.5px] "
                            : ""
                        }`}
                        onClick={() => setSelectedPlan("starter")}
                    >
                        Starter Plan
                    </button>
                    <button
                        className={`w-1/2 py-2 text-sm rounded-full font-medium ${
                        selectedPlan === "plus"
                            ? "border border-[#2D488F] border-[3.5px] "
                            : ""
                        }`}
                        onClick={() => setSelectedPlan("plus")}
                    >
                        Plus Plan
                    </button>
                    </div>
                    <div className="w-full h-[1.5px] bg-black my-4" />
                    <ul className="text-m text-[#2D488F] font-bold mb-4 space-y-1 list-none">
                    <li>2 Calls a month</li>
                    <li>Resume Feedback</li>
                    <li>Unlimited Q&A via chat</li>
                    <li>Career guidance</li>
                    </ul>
                    <div className="w-full h-[1.5px] bg-black my-4" />
                    <h1 className="text-3xl mb-4 font-bold">$330/month</h1>
                    <button className="flex items-center justify-center bg-[#2D488F] text-white p-4 font-bold w-full rounded-lg text-m hover:bg-[#1f2e51]">
                        Opt
                    </button>
                </div>
            </Card>
    </div>
  )
}

export default RightPanel
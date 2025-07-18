import {React,useState} from 'react';

//layout
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';


//icons
import { IoStarSharp } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";

//components
import RightPanel from './components/RightPanel';
import profile from "../../assets/mentorProfile/profile.png"
import Goal from './components/Goal';
import SessionDetails from './components/SessionDetails';
import PaymentDetails from './components/PaymentDetails';
import FinalConfirmation  from './components/FinalConfirmation'


const MentorProfile = () => {
  const tags = [
  "Digital Marketing",
  "Go To Market",
  "Design",
  "Growth Marketing",
  "Strategy",
  "Sales",
  "Scaling Teams"
  ];

  const [step, setStep] = useState(0);
  const [sessionInfo, setSessionInfo] = useState({
  date: null,  // will be a dayjs object
  time: '',    
  });

  return (
    <div className=" bg-white ">
      {/* Main Content */}
      <Navigation />
      <div className="mt-10 lg:ml-20 ml-10 py-10 px-6 grid grid-cols-1 md:grid-cols-3 gap-30">
        {/* Left - Profile Section */}
        <div className="w-4/5 md:col-span-2  space-y-6">
          <div className="flex items-center space-x-6">
            <img
              src={profile}
              alt="Jessica Barney"
              className="w-1/3 rounded-lg object-cover"
            />
            <div>
              <div className="flex items-center justify-end my-2 space-x-1">
                {[...Array(4)].map((_, i) => (
                  <IoStarSharp key={i} color="#000080" />
                ))}
                <div className='relative left-2' >
                    <IoIosHeartEmpty color='#000080' />
                </div>
              </div>
              <h1 className="text-3xl font-bold">Jessica Barney</h1>
              <h3 className="text-xl text-muted-foreground">Marketing Head @ PWC</h3>
              <p className="text-sm text-muted-foreground">6+ years building, growing & scaling high-performing B2B Marketing teams</p>
              <p className="text-sm text-muted-foreground">Paris, France</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 w-3/5">
            {tags.map((tag, i) => (
              <button key={i}
                className="border border-gray-400 text-sm px-3 py-1 rounded-md text-gray-800"
              >{tag}</button>
            ))}
          </div>

          <section>
            <h2 className="text-xl font-bold mb-2">About</h2>
            <p className="text-sm text-muted-foreground">
              MSc Engineer by training. Marketer by passion. I hold an MBA degree and have led Sales and Marketing both in SMBs and International Corporations. My approach ties data driven and customer centric. I'm fascinated by human behaviour and that informs my approach on every project.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">Professional Experience</h2>
            <div>
              <h3 className="font-medium">Marketing Head</h3>
              <p className="text-sm text-muted-foreground">PWC, USA (June 2023 - Current)</p>
              <p className="text-sm">Assisted in developing marketing strategies for social media campaigns. Analyzed consumer data to support targeted advertising efforts.</p>
            </div>
            <div className="mt-4">
              <h3 className="font-medium">Customer Service Representative</h3>
              <p className="text-sm text-muted-foreground">DHL, Germany (Jan 2022 - May 2023)</p>
              <p className="text-sm">Responded to customer inquiries and resolved issues effectively. Trained new staff on company protocols and customer service excellence.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">Education</h2>
            <p className="text-sm text-muted-foreground">Master of Arts in Marketing - Northeastern University</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">References/Reviews</h2>
            <div className="space-y-4">
              <div>
                <div className="flex items-center  my-2 space-x-1">
                <p className="font-medium mr-2">Jane Doe </p>
                {[...Array(4)].map((_, i) => (
                  <IoStarSharp key={i} color="#000080" />
                ))}
              </div>
                <p className="text-sm text-muted-foreground">Supervisor at Company Name: "A dedicated team player with excellent problem-solving skills. Highly recommended."</p>
              </div>
              <div>
              
                <div className="flex items-center my-2 space-x-1">
                <p className="font-medium mr-2">John Smith </p>
                {[...Array(4)].map((_, i) => (
                  <IoStarSharp key={i} color="#000080" />
                ))}
                
              </div>
                
                <p className="text-sm text-muted-foreground">Professor at University: "An outstanding student with a strong work ethic and leadership qualities."</p>
              </div>
            </div>
          </section>
        </div>

        {/* Right - Schedule Section */}
          <RightPanel setSessionInfo={setSessionInfo} onOptClick={() => setStep(1)}  />      
          {step !== 0 && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
            {step === 1 && <Goal onNext={() => setStep(2)} onClose={() => setStep(0)}  />}
            {step === 2 && <SessionDetails onNext={() => setStep(3)} onBack={() => setStep(0)} onClose={() => setStep(0)} sessionInfo={sessionInfo} />}
            {step === 3 && <PaymentDetails onNext={() => setStep(4)} onClose={() => setStep(0)} />}
            {step === 4 && <FinalConfirmation onClose={() => setStep(0)}  />}
          </div>
          )}
        </div>
      <Footer />
    </div>
  );
};

export default MentorProfile;

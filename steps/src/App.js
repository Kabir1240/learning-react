import { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  
  return (
    <>
      <button className='close' onClick={() => setIsOpen((currIsOpen) => !currIsOpen)}>&times;</button>
        {isOpen && (
          <Main step={step} setStep={setStep} />
        )}
    </>
  );
}

const Main = ({ step, setStep }) => {
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  const handleNext = () => {
    if (step < 3){
      setStep((currStep) => currStep + 1)
    }
  };

  const handlePrevious = () => {
    if (step > 1){
      setStep((currStep) => currStep - 1)
    }
  };
  
  return (
    <div className="steps">
      <div className ="numbers">
        <div className={step>=1 ? "active" : ""}>1</div>
        <div className={step>=2 ? "active" : ""}>2</div>
        <div className={step>=3 ? "active" : ""}>3</div>
      </div>

      <p className="message">Step {step}: {messages[step-1]}</p>

      <div className='buttons'>
        <button style={{ backgroundColor:"#7950F2", color:"#FFF" }} onClick={handlePrevious}>Previous</button>
        <button style={{ backgroundColor:"#7950F2", color:"#FFF" }} onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default App;

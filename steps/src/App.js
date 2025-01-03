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

  const Button = ({ bgColor, textColor, onClick, children }) => {
    return (
      <button 
        style={{ backgroundColor:bgColor, color:textColor }} 
        onClick={ onClick }>
          {children}
      </button>
    )
  }

  const StepMessage = ({ step, children }) => {
    // <p className="message">Step {step}: {messages[step-1]}</p>

    return (
      <div className="message">
        <h3>Step {step}</h3>
        {children}
      </div>
    )
  }
  
  return (
    <div className="steps">
      <div className ="numbers">
        <div className={step>=1 ? "active" : ""}>1</div>
        <div className={step>=2 ? "active" : ""}>2</div>
        <div className={step>=3 ? "active" : ""}>3</div>
      </div>

      <StepMessage step={step}>
        {messages[step - 1]}
      </StepMessage>

      <div className='buttons'>
        <Button
          bgColor="#7950F2"
          textColor="#FFF"
          onClick={handlePrevious}>
            Previous <span>👈</span>
        </Button>

        <Button
          bgColor="#7950F2"
          textColor="#FFF"
          onClick={handleNext}>
            Next <span>👉</span>
        </Button>
      </div>
    </div>
  )
}

export default App;

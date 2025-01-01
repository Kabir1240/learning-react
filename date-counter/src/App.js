import { use, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const todayDate = new Date(`${new Date().toDateString()}`);
  todayDate.setDate(todayDate.getDate() + count);

  const handleAddCount = () => {
    setCount((currCount) => currCount + step);
  };

  const handleSubtractCount = () => {
    setCount((currCount) => currCount - step);
  };

  return (
    <div className='App'>
      <div>
        <button onClick={() => setStep((currStep) => currStep - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((currStep) => currStep + 1)}>+</button>
      </div>

      <div>
        <button onClick={handleSubtractCount}>-</button>
        <span>Count: {count}</span>
        <button onClick={handleAddCount}>+</button>
      </div>

      {count === 0 && (
        <div>Today is {todayDate.toDateString()}</div>
      )}

      {count < 0 && (
        <div>{Math.abs(count)} days ago was {todayDate.toDateString()}</div>
      )}

      {count > 0 && (
        <div>{count} days from today will be {todayDate.toDateString()}</div>
      )}
    </div>
  );
}

export default App;

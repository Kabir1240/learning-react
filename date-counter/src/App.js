import { useState } from 'react';
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const todayDate = new Date(Date.now());
  todayDate.setDate(todayDate.getDate() + count);

  const handleAddCount = () => {
    setCount((currCount) => currCount + step);
  };

  const handleSubtractCount = () => {
    setCount((currCount) => currCount - step);
  };

  const handleReset = () => {
    setCount(0);
    setStep(1)
  }

  return (
    <div className='App'>
      <div>
        <input 
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => (setStep(Number(e.target.value)))} />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={handleSubtractCount}>-</button>
        <input 
          value={count}
          onChange={(e) => (setCount(Number(e.target.value)))} />
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

      {
        count !== 0 || step !== 1 ? 
        <button onClick={handleReset}>Reset</button> 
        : null
      }
    </div>
  );
}

export default App;

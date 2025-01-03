import './App.css';
import { useState } from 'react';

function App() {
  const [price, setPrice] = useState(0)
  const [yourTip, setYourTip] = useState(0)
  const [friendTip, setFriendTip] = useState(0)

  const totalTip = price * ((yourTip + friendTip)/200)
  const totalPrice = price + totalTip
  
  const handleReset = () => {
      setPrice(0)
      setYourTip(0)
      setFriendTip(0)
  }

  return (
    <div className="App">
      <EnterBill price={price} onSetPrice={setPrice}/>
      <TipSelector text="How did you like the service?" tip={yourTip} onSetTip={setYourTip}/>
      <TipSelector text="How did your friend like the service?" tip={friendTip} onSetTip={setFriendTip}/>
      <OutputTotal totalPrice={totalPrice} price={price} totalTip={totalTip}/>
      <ResetButton onClick={handleReset}/>    
    </div>
  );
}

const EnterBill = ({ price, onSetPrice }) => {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        value={price}
        placeholder='Enter bill'
        onChange={(e) => onSetPrice(Number(e.target.value))}/>
    </div>
  )
}

const TipSelector = ({ text, tip, onSetTip }) => {
  return (
    <div>
    <span>{text}</span>
    <select value={tip} onChange={(e) => onSetTip(Number(e.target.value))}>
      <option value={0}>Dissatisfied 0%</option>
      <option value={5}>It was okay 5%</option>
      <option value={10}>It was good 10%</option>
      <option value={20}>It was amazing 20%</option>
    </select>
  </div>
  )
}

const OutputTotal = ({ totalPrice, price, totalTip }) => {
  return (
    <h1>You pay ${totalPrice} (${price} + ${totalTip})</h1>    
  )
}

const ResetButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>Reset</button>
  )
}

export default App;

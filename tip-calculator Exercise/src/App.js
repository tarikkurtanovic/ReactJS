import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bills, onSetBill] = useState("");
  const [percentage1, setPercentage1] = useState("");
  const [percentage2, setPercentage2] = useState("");

  const tip = (bills * (percentage2 + percentage1)) / 2 / 100;
  console.log(tip);

  function handleChangeBill(e) {
    onSetBill(+e.target.value);
  }
  function handleReset() {
    onSetBill("");
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <div>
      <BillInput onSetBill={handleChangeBill} bill={bills} />
      <SelectPercentage
        percentage={percentage1}
        onSelect={(e) => setPercentage1(+e.target.value)}
      >
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage
        percentage={percentage2}
        onSelect={(e) => setPercentage2(+e.target.value)}
      >
        How did your friend like the service?
      </SelectPercentage>

      <Output bills={bills} tip={tip} />
      <Reset handleReset={handleReset} />
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input type="text" placeholder="Bill value" onChange={onSetBill}></input>
    </div>
  );
}
function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select value={percentage} onChange={onSelect}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay(5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">Absolutely amazing!(20%)</option>
      </select>
    </div>
  );
}

function Output({ bills, tip }) {
  if (!bills) return;
  return (
    <h3>
      You pay ${bills + tip} (${bills} + ${tip} tip)
    </h3>
  );
}

function Reset({ handleReset }) {
  return <button onClick={handleReset}>Reset</button>;
}

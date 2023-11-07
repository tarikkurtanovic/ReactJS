// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const [input, setInput] = useState(200);
  // const [currency, setCurrency] = useState(null);
  // const [currency2, setCurrency2] = useState(null);

  useEffect(function () {
    async function fetchingCurrency() {
      const response = await fetch(
        `https://api.frankfurter.app/latest?amount=${input}&from=EUR&to=USD`
      );
      const data = await response.json();
      console.log(data);
    }
    fetchingCurrency();
  }, []);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInput(+e.target.value)}
        value={input}
      />

      <select>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>OUTPUT</p>
    </div>
  );
}

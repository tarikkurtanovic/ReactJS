// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("EUR");
  const [currency2, setCurrency2] = useState("USD");
  const [outcome, setOutcome] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // function handleResetInput() {
  //   setAmount(0);
  // }

  function handleReset() {
    setAmount(0);
    setCurrency("EUR");
    setCurrency2("USD");
    setOutcome("");
  }

  useEffect(
    function () {
      async function fetchingCurrency() {
        setIsLoading(true);
        const response = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=${currency2}`
        );
        const data = await response.json();
        setOutcome(data.rates[currency2]);
        setIsLoading(false);
      }
      if (currency === currency2) return setOutcome(amount);
      fetchingCurrency();
      // handleResetInput();
    },

    [amount, currency, currency2]
  );

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setAmount(+e.target.value)}
        value={amount}
        disabled={isLoading}
      />
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>

      <select
        value={currency2}
        onChange={(e) => setCurrency2(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>

      <p>
        {outcome} {currency2}
      </p>

      <button onClick={handleReset}>RESET</button>
    </div>
  );
}

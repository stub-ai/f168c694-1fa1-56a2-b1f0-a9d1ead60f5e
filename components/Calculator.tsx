import { useState } from 'react';

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const handleNumberClick = (number: string) => {
    if (operator) {
      setSecondNumber(secondNumber + number);
    } else {
      setFirstNumber(firstNumber + number);
    }
  };

  const handleOperatorClick = (operator: string) => {
    setOperator(operator);
  };

  const calculate = () => {
    let result;
    switch (operator) {
      case "+":
        result = Number(firstNumber) + Number(secondNumber);
        break;
      case "-":
        result = Number(firstNumber) - Number(secondNumber);
        break;
      case "*":
        result = Number(firstNumber) * Number(secondNumber);
        break;
      case "/":
        result = Number(firstNumber) / Number(secondNumber);
        break;
      default:
        return;
    }
    setResult(result.toString());
  };

  const clear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperator("");
    setResult("");
  };

  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <div className="flex justify-between mb-4">
        <input type="text" readOnly value={firstNumber} className="border p-2 rounded w-1/2 mr-2" />
        <input type="text" readOnly value={secondNumber} className="border p-2 rounded w-1/2" />
      </div>
      <div className="grid grid-cols-4 gap-2 mb-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
          <button key={number} onClick={() => handleNumberClick(number.toString())} className="border p-2 rounded">
            {number}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-2 mb-4">
        {["+", "-", "*", "/"].map((operator) => (
          <button key={operator} onClick={() => handleOperatorClick(operator)} className="border p-2 rounded">
            {operator}
          </button>
        ))}
      </div>
      <button onClick={calculate} className="border p-2 rounded mb-4 w-full">
        Calculate
      </button>
      <button onClick={clear} className="border p-2 rounded w-full">
        Clear
      </button>
      {result && (
        <div className="mt-4">
          <h2 className="text-lg font-bold">Result:</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default Calculator;
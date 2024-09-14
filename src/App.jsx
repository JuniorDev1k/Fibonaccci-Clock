import React from "react";
import "./App.css";

const fibonacciNumbers = [1, 1, 2, 3, 5];

const findColors = (arr1, arr2) => {
  const result = [];
  const allFibonacci = new Set(fibonacciNumbers);
  const setArr2 = new Set(arr2);

  allFibonacci.forEach((num) => {
    const isInArr1 = arr1.includes(num);
    const isInArr2 = arr2.includes(num);

    if (isInArr1 && isInArr2) {
      result.push({ value: num, color: "blue" });
    } else if (isInArr1) {
      result.push({ value: num, color: "red" });
    } else if (isInArr2) {
      result.push({ value: num, color: "green" });
    } else {
      result.push({ value: num, color: "white" });
    }
  });

  return result;
};

const CompareCombinations = (objH, objM) => {
  let results = [];

  objH.forEach((arrH) => {
    objM.forEach((arrM) => {
      results.push(findColors(arrH, arrM));
    });
  });

  return results;
};

// Example hour and minute combinations (replace with actual logic)
const hourCombinations = [
  [1, 1],
  [2, 3],
  [1, 5],
];

const minuteCombinations = [[1, 2, 3], [5], [1, 2, 5]];

const App = () => {
  const results = CompareCombinations(hourCombinations, minuteCombinations);

  return (
    <div className="clock-container">
      {results.flat().map((item, index) => (
        <div key={index} className={`clock-square ${item.color}`}>
          {item.value}
        </div>
      ))}
    </div>
  );
};

export default App;

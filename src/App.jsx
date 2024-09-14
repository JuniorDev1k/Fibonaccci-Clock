import React from "react";
import "./index.css";

const fibonacciNumbers = [1, 1, 2, 3, 5];

const findColors = (arr1, arr2) => {
  const result = [];

  const countArr1 = arr1.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});
  const countArr2 = arr2.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  fibonacciNumbers.forEach((num) => {
    const isInArr1 = countArr1[num] || 0;
    const isInArr2 = countArr2[num] || 0;

    if (isInArr1 > 0 && isInArr2 > 0) {
      result.push({ value: num, color: "blue" });
    } else if (isInArr1 > 0) {
      result.push({ value: num, color: "red" });
    } else if (isInArr2 > 0) {
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

const hourCombinations = [
  [1, 1],
  [2, 3],
  [1, 5],
];

const minuteCombinations = [[1, 2, 3], [5], [1, 2, 5]];

const App = () => {
  const results = CompareCombinations(hourCombinations, minuteCombinations);

  return (
    <div className="clock-wrapper">
      {results.map((result, index) => (
        <div key={index} className="clock-container">
          <h3>Variant {index + 1}</h3>
          <div className="clock-grid">
            {result.map((item, idx) => (
              <div key={idx} className={`clock-square ${item.color}`}>
                {item.value}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;

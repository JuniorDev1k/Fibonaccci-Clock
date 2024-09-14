import React from "react";
import "./index.css";

const fibonacciNumbers = [1, 1, 2, 3, 5];

const findColors = (arr1, arr2) => {
  const result = [];

  const countArr1 = arr1.reduce((acc, num) => {
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

const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

const hourCombinations = [
  [1, 1],
  [2, 3],
  [1, 5],
];

const minuteCombinations = [[1, 2, 3], [5], [1, 2, 5]];

const App = () => {
  const hourComb = getRandomElement(hourCombinations);
  const minuteComo = getRandomElement(minuteCombinations);

  const result = findColors(hourComb, minuteComo);
  // console.log(result);

  return (
    <div className="clock-container">
      {result.map((item, index) => {
        return (
          <div
            key={index}
            className="clock-square"
            style={{ padding: item.value * 10, backgroundColor: item.color }}
          >
            {item.value}
          </div>
        );
      })}
    </div>
  );
};

export default App;

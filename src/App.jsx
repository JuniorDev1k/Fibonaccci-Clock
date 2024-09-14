import React from "react";
import "./index.css";
import {
  Clock,
  OneSquare,
  ThreeSquare,
  TwoSquare,
  FiveSquare,
} from "../src/components";

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
  [2, , 3],
];

const minuteCombinations = [[1, 2, 3, 5], [5, 2, 1], [1, 2, 5], [1]];

const App = () => {
  const hourComb = getRandomElement(hourCombinations);
  const minuteComo = getRandomElement(minuteCombinations);

  const result = findColors(hourComb, minuteComo);
  console.log(result);

  return (
    <div className="clock-container">
      <div>
        <div style={{ display: "flex" }}>
          <TwoSquare Color={result[2].color} />
          <div>
            <OneSquare Color={result[0].color} />
            <OneSquare Color={result[1].color} />
          </div>
        </div>
        <ThreeSquare Color={result[3].color} />
      </div>
      <FiveSquare Color={result[4].color} />
    </div>
  );
};

export default App;

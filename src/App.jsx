import React, { useState } from "react";
import "./index.css";
import {
  OneSquare,
  ThreeSquare,
  TwoSquare,
  FiveSquare,
} from "../src/components";

const App = () => {
  // Current Date
  const [currentTime, setCurrentTime] = useState(new Date());
  const Hours =
    currentTime.getHours() > 12
      ? currentTime.getHours() % 12
      : currentTime.getHours();

  const Minutes = currentTime.getMinutes();

  // fibonacci first 5 numbers.
  const fibonacciNumbers = [1, 1, 2, 3, 5];

  const ChangeTime = (num) => {
    const updatedTime = new Date(currentTime);
    updatedTime.setMinutes(updatedTime.getMinutes() + num);
    setCurrentTime(updatedTime);
  };

  // find all possible combinations
  const findAllCombinations = (fibNumbers, target) => {
    const results = [];

    const findCombinations = (index, currentSum, currentCombination) => {
      if (currentSum === target) {
        results.push(currentCombination.slice());
        return;
      }

      if (currentSum > target || index >= fibNumbers.length) {
        return;
      }

      findCombinations(index + 1, currentSum + fibNumbers[index], [
        ...currentCombination,
        fibNumbers[index],
      ]);

      findCombinations(index + 1, currentSum, currentCombination);
    };

    findCombinations(0, 0, [], 0);
    return results;
  };

  // finding the colors based on the comparing numbers
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
        if (countArr1[num] === 1) {
          result.push({ value: num, color: "red" });
          countArr1[num]--;
        } else {
          result.push({ value: num, color: "white" });
        }
      } else if (isInArr2 > 0) {
        result.push({ value: num, color: "green" });
      } else {
        result.push({ value: num, color: "white" });
      }
    });

    return result;
  };
  // getting random variant from all variants.

  const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const hourCombination = getRandomElement(
    findAllCombinations(fibonacciNumbers, Hours)
  );
  const minuteCombination = getRandomElement(
    findAllCombinations(fibonacciNumbers, Math.trunc(Minutes / 5))
  );

  // the Final Results :
  const result = findColors(hourCombination, minuteCombination);

  return (
    <div className="container">
      <div>
        <h1>Current Time</h1>
        <p>
          <span style={{ marginRight: "5px" }}>
            {currentTime.getHours() > 12
              ? (currentTime.getHours() % 12) + " PM"
              : currentTime.getHours() + " AM"}
          </span>
          {Minutes}
        </p>
        <div className="btns">
          <button onClick={() => ChangeTime(-5)}>Back</button>
          <button onClick={() => ChangeTime(5)}>Forward</button>
        </div>
      </div>
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
    </div>
  );
};

export default App;

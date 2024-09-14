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
      {/* {result.map((item, index) => {
        return (
          <div
            id={`${item.value}`}
            key={index}
            className={`clock-square`}
            style={{ padding: item.value * 10, backgroundColor: item.color }}
          >
            {item.value}
          </div>
        );
      })} */}

      <div>
        <div style={{ display: "flex" }}>
          <div style={{ padding: 2 * 20, backgroundColor: result[2].color }}>
            2
          </div>
          <div>
            <div style={{ padding: 1 * 20, backgroundColor: result[0].color }}>
              1
            </div>
            <div style={{ padding: 1 * 20, backgroundColor: result[1].color }}>
              1
            </div>
          </div>
        </div>
        <div style={{ padding: 3 * 20, backgroundColor: result[3].color }}>
          3
        </div>
      </div>
      <div style={{ padding: 5 * 20, backgroundColor: result[4].color }}>5</div>
    </div>
  );
};

export default App;

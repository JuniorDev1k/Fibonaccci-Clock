import React, { useState } from "react";
import FiveSquare from "./Squares/FiveSquare";
import ThreeSquare from "./Squares/ThreeSquare";
import TwoSquare from "./Squares/TwoSquare";
import OneSquare from "./Squares/OneSquare";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const fibonacciNumbers = [1, 1, 2, 3, 5]; // fibonacci first 5 numbers.

  const ChangeTime = (num) => {
    const updatedTime = new Date(currentTime);
    updatedTime.setMinutes(updatedTime.getMinutes() + num);
    setCurrentTime(updatedTime);
  };

  const findAllCombinations = (fibNumbers, target) => {
    const results = []; // To store all valid Combinations

    const findCombinations = (index, currentSum, currentCombination) => {
      if (currentSum === target) {
        results.push(currentCombination.slice()); // Store a copy of the current Combinations
        return;
      }

      if (currentSum > target || index >= fibNumbers.length) {
        return;
      }

      currentCombination.push(fibNumbers[index]);
      findCombinations(
        index + 1,
        currentSum + fibNumbers[index],
        currentCombination
      );

      currentCombination.pop();
      findCombinations(index + 1, currentSum, currentCombination);
    };

    findCombinations(0, 0, []);
    return results;
  };
  const CombinationsHoures = findAllCombinations(
    fibonacciNumbers,
    currentTime.Hours % 12
  ); // the Combinations  that we need :
  // const CombinationsMinutes = findAllCombinations(fibonacciNumbers, );
  // console.log(CombinationsHoures);
  // console.log(`------------------------------`);

  // console.log(`and for the minutes :${CombinationsMinutes}`);

  let a = 0;
  let b = 0;

  // algorithm for comparing combinations to find out the color we use  (green red || blue )
  const findColors = (arr1, arr2) => {
    for (item of arr1) {
      for (i of arr2) {
        if (item === i) {
          a++;
        }
      }
      a === 0
        ? console.error(`${item} is RED `)
        : console.log(`${item} is BLUE`);
      a = 0;
    }

    for (item of arr2) {
      for (i of arr1) {
        if (item === i) {
          a++;
        }
      }
      a === 0
        ? console.error(`${item} is GREEN `)
        : console.log(`${item} is BLUE`);
      a = 0;
    }
  };

  // here we compare all the combinations of the minutes and the hours, to choose the colors.
  const CompareCobinations = (objH, objM) => {
    for (arr of objH) {
      for (arr2 of objM) {
        findColors(arr, arr2);
      }
    }
  };

  return (
    <>
      <div style={{ margin: "10%" }}>
        <h1>Clock Time :</h1>
        {/* displaying time in a form H am pm : M ------------------------ */}
        <p>
          Current time{" "}
          {currentTime.getHours() > 12
            ? (currentTime.getHours() % 12) + " PM"
            : currentTime.getHours() + "AM"}{" "}
          : {currentTime.getMinutes()}
          {" M"}
        </p>
        {/* Buttons to update time + 5 min or - 5 mins */}
        <button onClick={() => ChangeTime(-5)}>Back</button>
        <button onClick={() => ChangeTime(5)}>Forward</button>
      </div>

      <section>
        <FiveSquare />
        <ThreeSquare />
        <TwoSquare />
        <OneSquare />
        <OneSquare />
      </section>
    </>
  );
};

export default Clock;

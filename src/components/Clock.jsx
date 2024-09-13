import React, { useState } from "react";
import FiveSquare from "./Squares/FiveSquare";
import ThreeSquare from "./Squares/ThreeSquare";
import TwoSquare from "./Squares/TwoSquare";
import OneSquare from "./Squares/OneSquare";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const ChangeTime = (num) => {
    const updatedTime = new Date(currentTime);
    updatedTime.setMinutes(updatedTime.getMinutes() + num);
    setCurrentTime(updatedTime);
  };

  const fibonacciNumbers = [1, 1, 2, 3, 5]; // fibonacci first 5 numbers.

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

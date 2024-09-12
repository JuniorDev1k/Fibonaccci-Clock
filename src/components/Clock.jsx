import React, { useState } from "react";
import FiveSquare from "./Squares/FiveSquare";
import ThreeSquare from "./Squares/ThreeSquare";
import TwoSquare from "./Squares/TwoSquare";
import OneSquare from "./Squares/OneSquare";

const Clock = () => {
  const CurrentTime = new Date();

  const Hours = CurrentTime.getHours(); // Hours of the CurrentTime.

  const Minutes = CurrentTime.getMinutes(); // Minutes of the CurrentTime.
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

  const Combinations = findAllCombinations(fibonacciNumbers, Hours % 12); // the Combinations  that we need :
  console.log(Combinations);

  return (
    <>
      <div>
        <h1>Clock Time :</h1>
        <p>
          Current time {Hours > 12 ? (Hours % 12) + " PM" : Hours + "AM"} :{" "}
          {Minutes}{" "}
        </p>
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

import React from "react";

const App = () => {
  let a = 0;
  let b = 0;

  const findColors = (arr1, arr2) => {
    let result = [];
    let Hcolors = [];
    let Mcolors = [];
    for (let item of arr1) {
      for (let i of arr2) {
        if (item === i) {
          a++;
        }
      }
      a === 0 ? Hcolors.push([item, "green"]) : Hcolors.push([item, "blue"]);
      a = 0;
    }

    for (let item of arr2) {
      for (let i of arr1) {
        if (item === i) {
          a++;
        }
      }
      a === 0 ? Mcolors.push([item, "red"]) : Mcolors.push([item, "blue"]);
      a = 0;
    }
    result.push(Hcolors, Mcolors);
    return result;
  };
  console.log(findColors([1, 5, 2], [3, 1, 4]));

  return (
    <div className="App">
      {findColors([1, 5, 2], [3, 1, 4]).map((iterator) => {
        const { Hcolors, Mcolors } = iterator;
        Hcolors?.map((row) => {
          return (
            <>
              <p style={{ padding: row[0] * 10, backgroundColor: row[1] }}>
                {row[0]}
              </p>
            </>
          );
        });
      })}
    </div>
  );
};

export default App;

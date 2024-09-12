import React from "react";

const App = () => {
  const sizes = [5, 3, 2, 1, 1];

  const calcuteFibounacci = (sizes, h) => {
    let squares = [];
    sizes.forEach((i) => {
      h - i != 0 ? squares.push(i) : 0;
    });

    console.log(squares);
  };
  calcuteFibounacci(sizes, 7);

  return <div>App</div>;
};

export default App;

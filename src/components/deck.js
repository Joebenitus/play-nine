import * as React from "react";

const Deck = () => {
  const shuffle = (arr) => {
    var m = arr.length,
      t,
      i;

    while (m) {
      i = Math.floor(Math.random() * m--);

      t = arr[m];
      arr[m] = arr[i];
      arr[i] = t;
    }
    return arr;
  };

  const deck = [
    -5, -5, -5, -5, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2,
    2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5,
    5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8,
    8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11,
    11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 12,
  ];
  return shuffle(deck).join(", ");
};

export default Deck;

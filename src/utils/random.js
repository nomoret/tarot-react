import { useState, useEffect } from "react";

const copyArray = (source, array) => {
  let index = -1;
  const length = source.length;

  array || (array = new Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
};

const shuffle = array => {
  const length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  let index = -1;
  const lastIndex = length - 1;
  const result = copyArray(array);
  while (++index < length) {
    const rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
    const value = result[rand];
    result[rand] = result[index];
    result[index] = value;
  }
  return result;
};

export const createDeck = deckCount => {
  console.log(deckCount);
  const pretendCardList = Array(78)
    .fill()
    .map((v, i) => i);

  let shuffleList = shuffle(pretendCardList);

  let result = [];
  for (let index = 0; index < deckCount; index++) {
    const random = Math.floor(Math.random() * shuffleList.length);
    console.log("뽑은 카드 번호 : ", random);
    const select = shuffleList.splice(random, 1)[0];
    console.log("뽑은 카드 진짜 번호 : ", select);

    const direction = Math.floor(Math.random() * 2) ? true : false;

    const card = {
      number: select,
      direction
    };

    result.push(card);
  }

  return result;
};

const Random = max => {
  const [cardList, setCardList] = useState([]);
  const [redraw, setRedraw] = useState(false);

  const redrawDeck = () => {
    setRedraw(true);
  };

  useEffect(() => {
    const pretendCardList = Array(78)
      .fill()
      .map((v, i) => i);

    let shuffleList = shuffle(pretendCardList);

    let result = [];
    for (let index = 0; index < max; index++) {
      const random = Math.floor(Math.random() * shuffleList.length);
      console.log("뽑은 카드 번호 : ", random);
      const select = shuffleList.splice(random, 1)[0];
      console.log("뽑은 카드 진짜 번호 : ", select);

      const direction = Math.floor(Math.random() * 2);

      const card = {
        number: select,
        direction
      };

      result.push(card);
    }

    console.log("결과", result);
    setCardList(result);
    if (redraw === true) {
      setRedraw(false);
    }
  }, [max, redraw]);

  return { cardList, redrawDeck };
};

export default Random;

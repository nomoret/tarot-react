import React from "react";
import Card from "../../component/Card";
import Random from "../../utils/random";

const SimpleToday = () => {
  const { cardList, redrawDeck } = Random(1);

  return (
    <div>
      <span>1 card</span>
      <div>오늘의 카드</div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {cardList &&
          cardList.map(({ number, direction }) => (
            <Card key={number} number={number} direction={direction} />
          ))}
      </div>
      <button onClick={redrawDeck}>다시뽑기</button>
    </div>
  );
};

export default SimpleToday;

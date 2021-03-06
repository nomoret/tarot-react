import React from "react";
import Card from "../../component/Card";
import Random from "../../utils/random";

const ToDo = () => {
  const { cardList } = Random(3);

  return (
    <div>
      <span>3 card</span>
      <div>생각, 느낌, 해야하는 것</div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {cardList &&
          cardList.map(({ number, direction }) => (
            <Card key={number} number={number} direction={direction} />
          ))}
      </div>
    </div>
  );
};
export default ToDo;

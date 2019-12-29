import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../component/Card";
import Random from "../../utils/random";

const SelectToday = () => {
  const { cardList } = Random(78);
  const { selectList } = useSelector(state => state);

  const dispatch = useDispatch();
  useEffect(() => {
    if (selectList.length === 3) {
      const confirmValue = window.confirm("카드 3장 선택했습니다.");
      console.log(confirmValue);
      if (confirmValue) {
        dispatch({
          type: "CLEAR_CARD"
        });
      }
    }
  }, [selectList, dispatch]);

  return (
    <div>
      <span>3 card</span>
      <div>과거,현재,미래 - 카드 3장을 선택하시오</div>
      <div
        style={{
          position: "absolute",
          marginLeft: "10px",
          display: "flex",
          justifyContent: "space-around",
          overflowX: "auto",
          overflowY: "scroll"
        }}
      >
        {cardList &&
          cardList.map(({ number, direction }) => (
            <Card
              key={number}
              number={number}
              direction={direction}
              select={true}
            />
          ))}
      </div>
      <button>다시뽑기</button>
    </div>
  );
};
export default SelectToday;

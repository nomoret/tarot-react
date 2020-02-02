import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../component/Card";
import { CREATE_SHUFFLE_DECK_REQUEST } from "../../redux/reducer/cards";
import { CLEAR_CARD_REQUEST } from "../../redux/reducer/cards";

const DetailToday = () => {
  const { cardList, isShuffledDeck } = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: CREATE_SHUFFLE_DECK_REQUEST,
      data: {
        deckCount: 3
      }
    });
    return () => {
      dispatch({
        type: CLEAR_CARD_REQUEST
      });
    };
  }, []);

  return (
    <div>
      <span>3 card</span>
      <div>과거 현재 미래</div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {isShuffledDeck &&
          cardList &&
          cardList.map(({ number, direction }) => (
            <Card key={number} number={number} direction={direction} />
          ))}
      </div>
    </div>
  );
};
export default DetailToday;

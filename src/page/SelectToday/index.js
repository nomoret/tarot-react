import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../component/Card";
import {
  CREATE_SHUFFLE_DECK_REQUEST,
  CLEAR_CARD_REQUEST,
  REDRAW_DECK_REQUEST
} from "../../redux/reducer/cards";

const CardPanel = styled.div`
  position: relative;
  margin-left: 10px;
  display: flex;
  height: 100%;
  overflow-x: auto;
`;

const DetailTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const SelectToday = () => {
  const { cardList, selectList, isShuffledDeck } = useSelector(state => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: CREATE_SHUFFLE_DECK_REQUEST,
      data: {
        deckCount: 78,
        selectCount: 3
      }
    });

    return () =>
      dispatch({
        type: CLEAR_CARD_REQUEST
      });
  }, []);

  const redrawDeck = useCallback(() => {
    dispatch({
      type: REDRAW_DECK_REQUEST
    });
  }, []);

  return (
    <div>
      <DetailTitle>
        <span>3장의 카드</span>
        <span>과거,현재,미래 - 카드 3장을 선택하시오</span>
      </DetailTitle>
      <CardPanel>
        {isShuffledDeck &&
          cardList &&
          cardList.map(({ number, direction }) => (
            <Card
              key={number}
              number={number}
              direction={direction}
              select={true}
            />
          ))}
      </CardPanel>
      <button onClick={redrawDeck}>다시뽑기</button>
    </div>
  );
};
export default SelectToday;

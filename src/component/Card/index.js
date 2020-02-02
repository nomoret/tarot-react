import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { CardImageList, MajorInfo } from "../../data/deck";
import { SELECT_CARD_REQUEST } from "../../redux/reducer/cards";

const Card = ({ number, direction, select }) => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const toggleCard = useCallback(() => {
    setOpen(!open);
    if (select) {
      dispatch({
        type: SELECT_CARD_REQUEST,
        data: number
      });
    }
  }, [open, number, select, dispatch]);

  return (
    <div
      style={{
        width: "200px",
        height: "400px",
        border: "1px solid black"
      }}
    >
      {!open ? (
        <div style={{ cursor: "pointer" }} onClick={toggleCard}>
          <img
            src={require("../../images/backside/Bicyclebackside.jpg")}
            alt="Smiley face"
            width="200px"
            height="400px"
          />
        </div>
      ) : (
        <>
          <img
            src={require(`../../images/deck/${CardImageList[number]}.jpg`)}
            alt="Smiley face"
            width="200px"
            height="400px"
          />
          <span>{`카드 번호 - ${number}`}</span>
          {direction ? <p>정방향</p> : <p>정방향</p>}
          <p>{`${MajorInfo[number % 22].title}`}</p>
          <p>{`${MajorInfo[number % 22].content}`}</p>
        </>
      )}
    </div>
  );
};

export default Card;

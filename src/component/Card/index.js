import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { CardImageList, MajorInfo } from "../../data/deck";
import { SELECT_CARD_REQUEST } from "../../redux/reducer/cards";

const CardMain = styled.div`
  width: 200px;
`;

const CardBackSide = styled.div`
  transform: translate(0%);
  transition: 0.3s ease-out;

  ${props => props.open}
  &:hover {
    cursor: pointer;
    transform: translate(0%, 30%);
    transition: 0.3s ease-out;
  }
`;

const CardParagraph = styled.p`
  color: white;
`;

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
    <CardMain>
      {!open ? (
        <CardBackSide onClick={toggleCard}>
          <img
            src={require("../../images/backside/Bicyclebackside.jpg")}
            alt="Smiley face"
            width="200px"
            height="400px"
          />
        </CardBackSide>
      ) : (
        <>
          <img
            src={require(`../../images/deck/${CardImageList[number]}.jpg`)}
            alt="Smiley face"
            width="200px"
            height="400px"
          />
          <span>{`카드 번호 - ${number}`}</span>
          {direction ? (
            <CardParagraph>정방향</CardParagraph>
          ) : (
            <CardParagraph>역방향</CardParagraph>
          )}
          <CardParagraph>{`${MajorInfo[number % 22].title}`}</CardParagraph>
          <CardParagraph>{`${MajorInfo[number % 22].content}`}</CardParagraph>
        </>
      )}
    </CardMain>
  );
};

export default Card;

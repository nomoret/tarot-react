import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navi = styled.div`
  display: flex;
`;

const NaviItem = styled.button`
  margin-left: 10px;
  width: 160px;
  height: 64px;
  border: 1px solid rgba(27, 31, 35, 0.2);
  border-color: white;
  border-radius: 0.25em;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  background-color: #800080;
  background-image: linear-gradient(-45deg, #0575e6, #021b79);
  transition: all 0.2s ease 0.1s;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

const Navigation = () => (
  <Navi>
    <Link to="/today">
      <NaviItem>오늘의 카드</NaviItem>
    </Link>
    <Link to="/detail">
      <NaviItem>오늘의 자세한 카드</NaviItem>
    </Link>
    <Link to="/todo">
      <NaviItem>생각</NaviItem>
    </Link>
    <Link to="/select">
      <NaviItem>오늘의 카드 직접뽑기</NaviItem>
    </Link>
  </Navi>
);

export default Navigation;

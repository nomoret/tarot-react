import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "../Navigation";
import SimpleToday from "../../page/SimpleToday";
import DetailToday from "../../page/DetailToday";
import SelectToday from "../../page/SelectToday";
import Thought from "../../page/Thought";

const AppHeader = styled.header`
  z-index: 32;
  padding: 16px;
  font-size: 28px;
  line-height: 1.5;
  color: hsla(0, 0%, 100%, 0.7);
  background-color: #24292e;
`;

const Main = styled.main`
  height: 100vh;
  max-height: 500vh;
  background-image: linear-gradient(180deg, hsla(0, 0%, 100%, 0) 60%, #1a37a5),
    linear-gradient(180deg, #000000 82%, #1a37a5);
`;

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>타로 카드</title>
      </Helmet>
      <AppHeader>
        <p>카드 뽑기</p>
      </AppHeader>
      <Main>
        <Router>
          <Navigation />
          <Switch>
            <Route path="/today" component={SimpleToday} />
            <Route path="/detail" component={DetailToday} />
            <Route path="/todo" component={Thought} />
            <Route path="/select" component={SelectToday} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </Main>
    </>
  );
}

const HomeDiv = styled.div`
  z-index: 32;
  padding: 16px;
  height: 50vh;
  margin-top: 50px;
  text-align: center;
  font-size: 28px;
  color: hsla(0, 0%, 100%, 0.7);
`;

const Home = () => <HomeDiv>홈 화면입니다</HomeDiv>;

export default App;

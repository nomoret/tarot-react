import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
  background-image: linear-gradient(180deg, hsla(0, 0%, 100%, 0) 60%, #fff),
    linear-gradient(70deg, #dbedff 32%, #ebfff0);
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
          <Route path="/today" component={SimpleToday} />
          <Route path="/detail" component={DetailToday} />
          <Route path="/todo" component={Thought} />
          <Route path="/select" component={SelectToday} />
        </Router>
      </Main>
    </>
  );
}

export default App;

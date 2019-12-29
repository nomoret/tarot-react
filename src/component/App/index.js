import React from "react";
import "./styles.css";

import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SimpleToday from "../../page/SimpleToday";
import DetailToday from "../../page/DetailToday";
import SelectToday from "../../page/SelectToday";
import Thought from "../../page/Thought";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>타로 카드</title>
      </Helmet>
      <header className="App-header">
        <p>카드 뽑기</p>
      </header>
      <main>
        <Router>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Link to="/today">오늘의 카드</Link>
            <Link to="/detail">오늘의 자세한 카드</Link>
            <Link to="/todo">생각</Link>
            <Link to="/select">오늘의 카드 직접뽑기</Link>
          </div>
          <Route path="/today" component={SimpleToday} />
          <Route path="/detail" component={DetailToday} />
          <Route path="/todo" component={Thought} />
          <Route path="/select" component={SelectToday} />
        </Router>
      </main>
    </>
  );
}

export default App;

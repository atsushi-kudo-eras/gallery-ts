import Data from "../data.json";
import { useState } from "react";
import styled from "styled-components";

// import components
import Header from "../Components/App/Header";
import Footer from "../Components/App/Footer";
import Authors from "../Components/App/Authors";
import Flame from "../Components/App/Frame";

// Root Component
function App() {
  // 型定義
  interface frameData {
    url: string;
    date: string;
    author: string;
  }
  // Authors state
  const [authState, setAuthState] = useState(Data.authors);

  // Functions to reverse each authors state.
  const revAuthState = (i: number) => {
    setAuthState(
      authState.map((authorStateOutput: any, $i: number) =>
        i === $i ? (authState[i] ? null : Data.authors[i]) : authorStateOutput
      )
    );
  };

  // Functions to all authors state true or false.
  const enableAllAuth = () => {
    setAuthState(Data.authors);
  };
  const disableAllAuth = () => {
    setAuthState(Data.authors.map(() => ""));
  };

  // Array that manages images to be displayed based on the state(Truthy/F) of each author.
  const enabledItems = Data.res.filter((frameData: frameData) => {
    return (
      frameData.author === authState[0] ||
      frameData.author === authState[1] ||
      frameData.author === authState[2] ||
      frameData.author === authState[3] ||
      frameData.author === authState[4] ||
      frameData.author === authState[5] ||
      frameData.author === authState[6] ||
      frameData.author === authState[7] ||
      frameData.author === authState[8] ||
      frameData.author === authState[9]
    );
  });

  // rendering
  return (
    <div>
      <Header Data={Data} />
      <Authors
        revAuthState={revAuthState}
        authState={authState}
        enableAllAuth={enableAllAuth}
        disableAllAuth={disableAllAuth}
        Data={Data}
      />
      <AppMain>
        <Flame enabledItems={enabledItems} />
      </AppMain>
      <Footer Data={Data} />
    </div>
  );
}

const AppMain = styled.main`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #181a1b;
`;

export default App;

import "./App.css";
import Data from "./data.json";
import { useState } from "react";

// import components
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Authors from "./Components/Authors";
import Flame from "./Components/Frame";

// Root Component
function App() {

  // 型定義
  interface frameData {
    url: string;
    title: string;
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
    setAuthState(Data.authors.map(() => ''));
  };

  // Array that manages images to be displayed based on the state(Truthy/F) of each author.
  const enabledItems = Data.img.filter((frameData: frameData) => {
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
    <div className="App">
      <Header Data={Data} />
      <Authors
        revAuthState={revAuthState}
        authState={authState}
        enableAllAuth={enableAllAuth}
        disableAllAuth={disableAllAuth}
        Data={Data}
      />
      <main>
        <Flame enabledItems={enabledItems} />
      </main>
      <Footer Data={Data} />
    </div>
  );
}

export default App;

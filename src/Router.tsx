import { BrowserRouter, Route } from "react-router-dom";
import App from "./Pages/App";
import Admin from "./Pages/Admin";
import styled from "styled-components";

function Router() {
  return (
    <Base>
      <BrowserRouter>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </BrowserRouter>
    </Base>
  );
}

const Base = styled.div`
  text-align: center;
  background-color: #282c34;
  color: #fff;
  min-height: 100vh;
`;

export default Router;

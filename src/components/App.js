import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import CharacterList from "../characters/CharacterList";
import Login from "./Login/Login";
import Header from "../common/Header";
import useToken from "./useToken"

function App() {
  
  const { token, setToken} = useToken();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header>
          <h1> Player Log </h1>
        </Header>
        <Switch>
          <Route path="/characters">
            <CharacterList token={token}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

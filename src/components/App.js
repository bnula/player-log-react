import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import CharacterList from "../characters/CharacterList";
import Login from "./Login/Login";

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
      <h1> Player Log </h1>
      <BrowserRouter>
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

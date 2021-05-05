import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import CharacterList from "../characters/CharacterList";
import CampaignList from "../campaigns/CampaignList";
import Login from "./Login/Login";
import Header from "../common/Header";
import useToken from "./useToken"
import "./App.css"

function App() {
  
  const { token, setToken } = useToken();

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
          <Route path="/campaigns">
            <h2>Campaigns</h2>
            <CampaignList token={token} />
          </Route>
          <Route path="/characters">
            <CharacterList token={token}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

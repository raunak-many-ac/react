import React from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopBar from './Common_Components/TopBar/TopBar';
import SideBar from './Common_Components/SideBar/SideBar';
import {MyDashboard} from "./Pages/MyDashboard";
import {ExploreAi} from "./Pages/ExploreAi";


function App() {
  return (
    <React.Fragment>
      <Router>
        <SideBar/>
        
        <Switch>
          <Route exact path = "/"  component={(props) => <TopBar tabname = "My Dashboard" />}/>
          <Route exact path = "/mydashboard"  component={(props) => <TopBar tabname = "My Dashboard" />}/>
          <Route exact path = "/exploreai" component={(props) => <TopBar tabname = "Case Study" />}/>
        </Switch>

        <Switch>
          <Route exact path = "/" component = {MyDashboard}/>
          <Route exact path = "/mydashboard" component = {MyDashboard}/>
          <Route exact path = "/exploreai" component = {ExploreAi}/>
        </Switch>

      </Router>

    </React.Fragment>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import {Switch, Route} from "react-router-dom";
import SideBar from "./components/sideBar.jsx";
import Introduction from "./components/Introduction.jsx";
import InitCreate from './containers/InitCreate.jsx'
import Actions from './containers/Actions.jsx'
import Initialization from './containers/dbInitialization.jsx'
import dbActions from './containers/dbActions.jsx'
import Team from "./components/Team.jsx";
import Github from "./components/Github.jsx";
import TopNav from "./containers/TopNav.jsx"

 const App = () => {
  return (

    <div className="App">
      <SideBar/>
      <div className="mid">
        <TopNav/>
        <Switch>
            <Route component={Introduction} exact path="/"/>
            <Route component={InitCreate} exact path="/init-create"/>
            <Route component={Actions} exact path="/actions"/>
            <Route component={Initialization} exact path="/db-init"/>
            <Route component={dbActions} exact path="/db-actions"/>
            <Route component={Team} exact path="/teamexodus"/>
        </Switch>
      </div>
    </div>
  );
};

export default App;
import React from 'react';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopBar from "./Common_Components/TopBar/TopBar";
import SideBar from "./Common_Components/SideBar/SideBar";
import MyDashboard from "./Pages/Mydashboard/MyDashboard";
import CaseStudy from "./Pages/CaseStudy/CaseStudy";
import Contact from "./Pages/ContactUs/Contact";
import Login from "./auth/Login";

import firebase from "./firebase";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    this.authListener();
  }

  //..it set states of the component on user login state changed
  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
      else {
        this.setState({ user: null })
      }
    })
  }


  render() {

    //..if user is logged in show User the app content
    // if (this.state.user) {
      return (
        <React.Fragment>
          <Router>
            <SideBar />

            <Switch>
              <Route exact path="/" component={(props) => <TopBar/>} />
              <Route exact path="/mydashboard" component={(props) => <TopBar />} />
              <Route exact path="/casestudy" component={(props) => <TopBar />} />
              <Route exact path="/contactus" component={(props) => <TopBar/>} />
            </Switch>

            <Switch>
              <Route exact path="/" component={MyDashboard} />
              <Route exact path="/mydashboard" component={MyDashboard} />
              <Route exact path="/casestudy" component={CaseStudy} />
              <Route exact path="/contactus" component={Contact} />

            </Switch>
          </Router>

        </React.Fragment>
      );
    // }
    
    //..if user is not logged in show Login Screen
    // return(
    //   <Login/>
    // );

  }
}

export default App;

import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import profile_image from "../../assets/profile.svg"

import { CircularImage, LogOut, TabNameDiv, Header } from "./Styles";

import firebase from "../../firebase";


export default class TopBar extends React.Component {

  state = {
    path: "/mydashboard"
  }

  componentDidMount() {
    this.setState(
      {
        path: window.location.pathname
      }
    )
  }

  render() {

    //..tabs on the navigation bar
    const TabName = () => {

      if (this.state.path.localeCompare("/mydashboard") == 0 || this.state.path.localeCompare("/") == 0)
        return (
          <TabNameDiv> My dashboard </TabNameDiv>
        );

      if (this.state.path.localeCompare("/exploreai") == 0)
        return (
          <TabNameDiv> Explore Ai </TabNameDiv>
        );


      return (
        <TabNameDiv> Contact Us </TabNameDiv>
      );
    }

    return (
      <Header>
        <Navbar expand="lg">

          <TabName />

          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="/" >

                <CircularImage src={profile_image} />
                <LogOut onClick = {this.logOut}>LogOut</LogOut>

              </Nav.Link>
            </Nav.Item>
          </Nav>

        </Navbar>
      </Header>
    );
  }

  logOut = () =>{
    firebase.auth().signOut();
  }

}
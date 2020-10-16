import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import profile_image from "../../assets/profile.svg"

import {CircularImage, LogOut, TabNameDiv, Header} from "./Styles";


export default class TopBar extends React.Component {

  state = {
    path: "/mydashboard"
  }

  componentDidMount(){
    this.setState(
     {
      path: window.location.pathname
     }
    )
  }

  render() {

    //..tabs on the navigation bar
    const TabName = () => {

      if (this.state.path.localeCompare("/mydashboard") == 0)
        return (
          <TabNameDiv> My dashboard </TabNameDiv>
        );

      return (
        <TabNameDiv> Explore Ai </TabNameDiv>
      );
    }

    return (
      <Header>
        <Navbar expand="lg">

          <TabName/>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className = "ml-auto">
              <Nav.Item>
                <Nav.Link href="/" >

                  <CircularImage src={profile_image} />
                  <LogOut>LogOut</LogOut>

                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>

        </Navbar>
      </Header>
    );
  }

}
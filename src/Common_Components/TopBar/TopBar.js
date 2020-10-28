import React from 'react';
import profile_image from "../../assets/profile.png"

import { CircularImage, LogOut, TabNameDiv, TopbarContainer, ProfileContainer } from "./Styles";

import firebase from "../../firebase";
import { withRouter } from 'react-router-dom';


 class TopBar extends React.Component {

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

      if (this.state.path.localeCompare("/casestudy") == 0)
        return (
          <TabNameDiv> Case Study </TabNameDiv>
        );


      return (
        <TabNameDiv> Contact Us </TabNameDiv>
      );
    }

    return (
      <TopbarContainer>
        

          <TabName />

          <ProfileContainer>            

                <CircularImage src={profile_image} />
                <LogOut onClick = {this.logOut}>LogOut</LogOut>
              
          </ProfileContainer>

        
      </TopbarContainer>
    );
  }

  logOut = () =>{
    firebase.auth().signOut();
    this.props.history.push({
      pathname: "/",
    })
  }

}

export default withRouter(TopBar);
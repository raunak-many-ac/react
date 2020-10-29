import React from "react";
import { withRouter } from "react-router-dom";
import firebase from "../firebase";

import { Container, H2, Card, Form, Input, ButtonContainer, AuthButton, MessageBar, U } from "./Styles";

class Login extends React.Component {

     state = {
          showMessage: true,
          color: "#ff3b3b",
          message: ""
     }

     constructor(props) {
          super(props);
          this.state = {
               email: null,
               password: null
          }
     }

     login = (e) => {

          e.preventDefault();
          this.removeMessage();
          this.showGreenAlertMessage("loging In...");
          if (this.ValidateEmail(this.state.email)) {

               firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
                    .then((user) => {
                         console.log(user);
                    }).catch((error) => {
                         console.log(error);
                         this.showRedAlertMessage( "No Such User 🤔");
                    })
          }
     }

     signUp = (e) => {
          e.preventDefault();
          this.removeMessage();
          this.showGreenAlertMessage("Signing Up...");
          if (this.ValidateEmail(this.state.email)) {
               firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                    .then((user) => {
                         console.log(user);
                         // this.logOut(); //..so that user can login manually
                    }).catch((error) => {
                         console.log(error);
                         this.showRedAlertMessage(error.message+" ☹️");
                    })
          }
     }

     logOut = () => {
          firebase.auth().signOut();
          this.props.history.push({
               pathname: "/",
          })
     }

     ValidateEmail(inputText) {
          var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

          if (!inputText || !inputText.match(mailformat)) {
               this.showRedAlertMessage("You have entered an invalid email address! 😵");    //The pop up alert for an invalid email address
               return false;
          }

          return true;
              
     }

     showRedAlertMessage = (message) => {
          console.log("showing red alert message....")
          this.setState(
               {
                    ...this.state,
                    message,
                    showMessage: true,
                    color: "#ff3b3b",
               }
          )
     }

     showGreenAlertMessage = (message) => {
          console.log("showing green alert message.... ")
          this.setState(
               {
                    ...this.state,
                    message,
                    showMessage: true,
                    color: "#00e600",
               }
          )
     }

     removeMessage = () => {
          this.setState(
               {
                    ...this.state,
                    showMessage: false
               }
          )
     }

     handleChange = (e) => {
          this.setState({
               [e.target.name]: e.target.value
          })
     }

     render() {
          return (
               <Container>
                    <H2>User Login</H2>
                    <Card>
                         <Form>
                              <Input type="email"
                                   id="email"
                                   name="email"
                                   placeholder="Username"
                                   onChange={this.handleChange}
                                   value={this.state.email} />

                              <Input type="password"
                                   id="password"
                                   name="password"
                                   placeholder="Password"
                                   onChange={this.handleChange}
                                   value={this.state.password} />

                              <ButtonContainer>
                                   <AuthButton onClick={this.login}>Login</AuthButton>
                                   <AuthButton onClick={this.signUp}>SignUp</AuthButton>
                              </ButtonContainer>
                         </Form>
                    </Card>
                    <MessageBar visible={this.state.showMessage} color={this.state.color}>{this.state.message}<U onClick={this.removeMessage}>close</U></MessageBar>
               </Container>
          );
     }
}

export default withRouter(Login);

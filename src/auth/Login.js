import React from "react";
import firebase from "../firebase";

import { Container, H2, Card, Form, Input, ButtonContainer, AuthButton } from "./Styles";

export default class Login extends React.Component {

     constructor(props) {
          super(props);
          this.state = {
               email: null,
               password: null
          }
     }

     login = (e) => {
          e.preventDefault();
          if (this.ValidateEmail(this.state.email)) {

               firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
                    .then((user) => {
                         console.log(user);
                    }).catch((error) => {
                         console.log(error);
                         alert(!error.message ? "No Such User" : error.message);
                    })
          }
     }

     signUp = (e) => {
          e.preventDefault();
          if (this.ValidateEmail(this.state.email)) {
               firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                    .then((user) => {
                         console.log(user);
                    }).catch((error) => {
                         console.log(error);
                         alert(error.message);

                    })
          }
     }

     ValidateEmail(inputText) {
          var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
          if (inputText.match(mailformat)) {
               return true;
          }
          else {
               alert("You have entered an invalid email address!");    //The pop up alert for an invalid email address
               return false;
          }
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
               </Container>
          );
     }


}

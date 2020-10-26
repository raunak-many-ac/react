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
          firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
               .then((user) => {
                    console.log(user);
               }).catch((error) => {
                    console.log(error);
                    alert("Wrong Email or password");
               })
     }

     signUp = (e) => {
          e.preventDefault();
          firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
               .then((user) => {
                    console.log(user);
               }).catch((error) => {
                    console.log(error);
                    alert("Something went wrong");

               })
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

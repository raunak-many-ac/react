import React from 'react'

//..importing styled components
import { Container } from "./Styles";
import { ContactUsContainer, FindUsContainer, Title, Description } from "./Styles";
import { ContactForm, UserContactDetails, Input, MessageForm, SubmitButton } from "./Styles";
import { ContactDetailsContainer, Logo, SubTitle, Link } from "./Styles";

//..import fontawsome
import { faPhoneAlt, faFax, faGlobe, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//..firebase
import firebase from "../../firebase";

import { ThemeContext } from "../../Theme";




const ContactDetails = (props) => {

    return (

        <ContactDetailsContainer>
            <Logo><FontAwesomeIcon icon={props.logo} size='2x' /></Logo>
            <div>
                <SubTitle>{props.subtitle}</SubTitle>
                {props.data === '#' ? <Link href="#" color = {props.color}>{props.link}</Link> : <div>{props.data}</div>}
            </div>
        </ContactDetailsContainer>

    );
}

class Contact extends React.Component {
    static contextType = ThemeContext;

    data = {

    }
    render() {
        const {darkColor} = this.context;

        return (
            <Container>

                <ContactUsContainer>

                    <FindUsContainer>
                        <Title>Find Us There</Title>
                        <Description>Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services.</Description>
                        <ContactDetails color = {darkColor} subtitle={'Phone:'} data={'(123)123-456'} logo={faPhoneAlt} />
                        <ContactDetails color = {darkColor} subtitle={'Fax:'} data={'(123)123-456'} logo={faFax} />
                        <ContactDetails color = {darkColor} subtitle={'Web'} data={'#'} link={'www.example.com'} logo={faGlobe} />
                        <ContactDetails color = {darkColor} subtitle={'E-Mail:'} data={'#'} link={'office@example.com'} logo={faEnvelope} />
                    </FindUsContainer>

                    <ContactForm onSubmit={this.send}>
                        <Title>Contact Form</Title>
                        <UserContactDetails>
                            <Input placeholder="Name" onChange={this.handleNameChange}></Input>
                            <Input placeholder="Email" onChange={this.handleEmailChange}></Input>
                        </UserContactDetails>
                        <Input placeholder="subject" onChange={this.handleSubjectChange}></Input>
                        <MessageForm placeholder="Message" onChange={this.handleMessageChange}></MessageForm>
                        <SubmitButton color = {darkColor}>SUBMIT MESSAGE</SubmitButton>
                    </ContactForm>

                </ContactUsContainer>

            </Container>
        )
    }

    handleEmailChange = (event) => {
        this.data.email = event.target.value
    }

    handleNameChange = (event) => {
        this.data.name = event.target.value
    }

    handleSubjectChange = (event) => {
        this.data.subject = event.target.value
    }

    handleMessageChange = (event) => {
        this.data.message = event.target.value
    }

    send = (event) => {

        event.preventDefault();
        console.log("sending... name = " + this.data.name);

        var db = firebase.firestore();
        db.collection("Customer Query").add({
            email: this.data.email,
            name: this.data.name,
            subject: this.data.subject,
            message: this.data.message
        }).then(
            alert("We received your message....")
        )
    }
}


export default Contact;
import React from 'react'

//..importing styled components
import { Container } from "./Styles";
import { ContactUsContainer, FindUsContainer, Title, Description } from "./Styles";
import { ContactForm, UserContactDetails, Input, MessageForm, SubmitButton } from "./Styles";
import { ContactDetailsContainer, Logo, SubTitle, Link, MessageBar, U } from "./Styles";

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
                {props.data === '#' ? <Link href="#" color={props.color}>{props.link}</Link> : <div>{props.data}</div>}
            </div>
        </ContactDetailsContainer>

    );
}

class Contact extends React.Component {
    static contextType = ThemeContext;

    state = {
        showMessage: false,
        color: "#ff3b3b",
        message: "testing",
        data: {
            name: "",
            email: "",
            subject: "",
            message: ""
        }
    };

    handleEmailChange = (event) => {
        this.setState({
            ...this.state,
            data: {
                ...this.state.data,
                email: event.target.value
            }
        })
        
    }

    handleNameChange = (event) => {
        this.setState({
            ...this.state,
            data: {
                ...this.state.data,
                name: event.target.value
            }
        })
    }

    handleSubjectChange = (event) => {
        this.setState({
            ...this.state,
            data: {
                ...this.state.data,
                subject: event.target.value
            }
        })
    }

    handleMessageChange = (event) => {
        this.setState({
            ...this.state,
            data: {
                ...this.state.data,
                message: event.target.value
            }
        })
    }

    send = (event) => {

        event.preventDefault();
        // console.log("sending... name = " + this.state.data.name);
        this.showGreenAlertMessage("Sending feedback... ")
        var db = firebase.firestore();
        db.collection("Customer Query").add({
            email: this.state.data.email,
            name: this.state.data.name,
            subject: this.state.data.subject,
            message: this.state.data.message
        }).then((_) => {
            this.showGreenAlertMessage("Message sent 🥳");
            this.setState(
                {
                    ...this.state,
                    data: {
                        name: "",
                        email: "",
                        subject: "",
                        message: ""
                    }
                }
            )

        }).catch(e => {
            this.showRedAlertMessage("Something went wrong ☹️");
        })
    }

    showRedAlertMessage = (message) => {
        console.log("showing red alert message.... ")
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
        console.log("showing green alert message....")
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

    render() {
        const { darkColor } = this.context;

        return (
            <Container>

                <ContactUsContainer>

                    <FindUsContainer>
                        <Title margin = "60px">Find Us There</Title>
                        <Description>Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services.</Description>
                        <ContactDetails color={darkColor} subtitle={'Phone:'} data={'(123)123-456'} logo={faPhoneAlt} />
                        <ContactDetails color={darkColor} subtitle={'Fax:'} data={'(123)123-456'} logo={faFax} />
                        <ContactDetails color={darkColor} subtitle={'Web'} data={'#'} link={'www.example.com'} logo={faGlobe} />
                        <ContactDetails color={darkColor} subtitle={'E-Mail:'} data={'#'} link={'office@example.com'} logo={faEnvelope} />
                    </FindUsContainer>

                    <ContactForm onSubmit={this.send}>
                        <Title margin = "5px">Contact Form</Title>
                        <MessageBar visible={this.state.showMessage} color={this.state.color}>{this.state.message}<U onClick={this.removeMessage}>close</U></MessageBar>
                        <UserContactDetails>
                            <Input placeholder="Name" onChange={this.handleNameChange} value={this.state.data.name} ></Input>
                            <Input placeholder="Email" onChange={this.handleEmailChange} value={this.state.data.email}></Input>
                        </UserContactDetails>
                        <Input placeholder="subject" onChange={this.handleSubjectChange} value={this.state.data.subject}></Input>
                        <MessageForm placeholder="Message" onChange={this.handleMessageChange} value={this.state.data.message}></MessageForm>
                        <SubmitButton color={darkColor}>SUBMIT MESSAGE</SubmitButton>
                    </ContactForm>

                </ContactUsContainer>

            </Container>
        )
    }

}


export default Contact;
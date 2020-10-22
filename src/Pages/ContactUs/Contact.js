import React from 'react'

//..images
import mapImage from "../../assets/map.jpeg";
import officeImage from "../../assets/office.jpeg";

//..importing styled components
import { Container, Location, Map, OfficeBackground, OurOfficeText, OfficeAddress, AddressText } from "./Styles";
import { ContactUsContainer, FindUsContainer, Title, Description } from "./Styles";
import { ContactForm, UserContactDetails, Input, MessageForm, SubmitButton } from "./Styles";
import { ContactDetailsContainer, Logo, SubTitle, Link } from "./Styles";

//..import fontawsome
import { faPhoneAlt, faFax, faGlobe, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//..firebase
import firebase from "../../firebase";



const ContactDetails = (props) => {

    return (

        <ContactDetailsContainer>
            <Logo><FontAwesomeIcon icon={props.logo} size='2x' /></Logo>
            <div>
                <SubTitle>{props.subtitle}</SubTitle>
                {props.data === '#' ? <Link href="#">{props.link}</Link> : <div>{props.data}</div>}
            </div>
        </ContactDetailsContainer>

    );
}

class Contact extends React.Component {

    data = {
        
    }
    render() {
        console.log("rerendering....");
        return (
            <Container>

                <Location>
                    <Map image={mapImage} />
                    <OfficeBackground image={officeImage}>
                        <OurOfficeText>Our Office</OurOfficeText>
                        <OfficeAddress>
                            <AddressText>45 Park Avenue, Apt.303</AddressText>
                            <AddressText>NewYork, NY, 10016</AddressText>
                            <AddressText>Phone: (123)123-456</AddressText>
                        </OfficeAddress>
                    </OfficeBackground>
                </Location>

                <ContactUsContainer>

                    <FindUsContainer>
                        <Title>Find Us There</Title>
                        <Description>Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services.</Description>
                        <ContactDetails subtitle={'Phone:'} data={'(123)123-456'} logo={faPhoneAlt} />
                        <ContactDetails subtitle={'Fax:'} data={'(123)123-456'} logo={faFax} />
                        <ContactDetails subtitle={'Web'} data={'#'} link={'www.example.com'} logo={faGlobe} />
                        <ContactDetails subtitle={'E-Mail:'} data={'#'} link={'office@example.com'} logo={faEnvelope} />
                    </FindUsContainer>

                    <ContactForm onSubmit={this.send}>
                        <Title>Contact Form</Title>
                        <UserContactDetails>
                            <Input placeholder="Name" onChange = {this.handleNameChange}></Input>
                            <Input placeholder="Email"  onChange = {this.handleEmailChange}></Input>
                        </UserContactDetails>
                        <Input placeholder="subject" onChange = {this.handleSubjectChange}></Input>
                        <MessageForm placeholder="Message" onChange = {this.handleMessageChange}></MessageForm>
                        <SubmitButton>SUBMIT MESSAGE</SubmitButton>
                    </ContactForm>

                </ContactUsContainer>

            </Container>
        )
    }

    handleEmailChange = (event) =>{
        this.data.email = event.target.value
    }

    handleNameChange = (event) =>{
        this.data.name = event.target.value
    }

    handleSubjectChange = (event) =>{
        this.data.subject = event.target.value
    }

    handleMessageChange = (event) =>{
        this.data.message = event.target.value
    }

    send = (event) => {
        // e.preventDefault();
        event.preventDefault();
        console.log("sending... name = "+this.data.name);
        
        var db = firebase.firestore();
        db.collection("Customer Query").add({
            email: this.data.email,
            name: this.data.name,
            subject: this.data.subject,
            message: this.data.message
        });
    }
}


export default Contact;
import React from 'react'

//..images
import mapImage from "../../assets/map.jpeg";
import officeImage from "../../assets/office.jpeg";

//..importing styled components
import {Container, Location, Map, OfficeBackground, OurOfficeText, OfficeAddress, AddressText} from "./Styles";
import {ContactUsContainer, FindUsContainer, Title, Description} from "./Styles";
import {ContactForm, UserContactDetails, Input, MessageForm, SubmitButton} from "./Styles";
import {ContactDetailsContainer, Logo, SubTitle, Link} from "./Styles";

//..import fontawsome
import {faPhoneAlt, faFax, faGlobe, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const ContactDetails = (props) => {
    
    return(
        
            <ContactDetailsContainer>
                    <Logo><FontAwesomeIcon  icon={props.logo} size='2x'/></Logo>
                    <div>
                        <SubTitle>{props.subtitle}</SubTitle>
                        {props.data==='#'?<Link href="#">{props.link}</Link>:<div>{props.data}</div>}
                    </div>
            </ContactDetailsContainer>
        
    );
}

class Contact extends React.Component{
    render(){
        return(
            <Container>

                <Location>
                    <Map image = {mapImage}/>
                    <OfficeBackground image = {officeImage}>
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
                        <ContactDetails subtitle={'Phone:'} data={'(123)123-456'} logo={faPhoneAlt}/>
                        <ContactDetails subtitle={'Fax:'} data={'(123)123-456'} logo={faFax}/>
                        <ContactDetails subtitle={'Web'} data = {'#'} link={'www.example.com'} logo={faGlobe}/>
                        <ContactDetails subtitle={'E-Mail:'} data={'#'} link={'office@example.com'} logo={faEnvelope}/>
                    </FindUsContainer>

                    <ContactForm>
                        <Title>Contact Form</Title>
                        <UserContactDetails>
                            <Input placeholder="Name"></Input>
                            <Input placeholder="Email"></Input>
                        </UserContactDetails>
                        <Input placeholder="subject"></Input>
                        <MessageForm placeholder="Message"></MessageForm>
                        <SubmitButton>SUBMIT MESSAGE</SubmitButton>
                    </ContactForm>

                </ContactUsContainer>
                
            </Container>
        )
    }
} 


export default Contact;
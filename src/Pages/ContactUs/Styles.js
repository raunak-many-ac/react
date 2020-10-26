import styled from "styled-components";

export const Container = styled.div`
  margin-left: 22.5%;
  margin-right: 6em;
  width: 60%;
  height: 100%;
`;

export const Location = styled.div`
    @media (min-width:1000px){
        display:flex;
    }    
`;

export const Map = styled.div`
    width:100%;
    height:60%;
    background-repeat:no-repeat;
    background-size:100%;
    background-image:url(${props => props.image});

    @media (min-width:1000px){
        height:400px;
        width:71%;
    }    
`;

export const OfficeBackground = styled.div`
    width:100%;
    height:60%;
    position: relative;
    @media (min-width:1000px){
        height:400px;
        width:29%;
    }
    
    background-image:url(${props => props.image});

    &::before{
        content: "";
        height:350px;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        background-color: #2b2c30;
        opacity: 0.9;
        
        @media (min-width:1000px){
             height:400px;
        }
    }
    
`;

export const OurOfficeText = styled.p`        
        position: absolute;
        color:white;
        font-size:32px;
        width:200px;
        text-align:center;
        font-weight:bold;
        left:50%;
        margin-left:-100px;
        margin-top:70px;
        @media (min-width:1000px){
            margin-top:100px;
        }
        
        
`;

export const OfficeAddress = styled.div `
        position:absolute;
        color:white;
        font-size:14px;
        font-weight:bold;
        width:220px;
        top:100px;
        left:50%;
        margin-top:50px;
        margin-left:-110px;
        @media (min-width:1000px){
            margin-top:100px;
        }
        
`;

export const AddressText = styled.p `
        
    color:white;
    text-align:center;
    font-size:18px;
    font-weight:bold;
`;

export const ContactUsContainer = styled.div `
    padding-right:60px;

    @media (min-width:1000px){
        display:flex;
        padding-left:10%;
        padding-right:10%;
    }
`;


export const FindUsContainer = styled.div `
    
    @media (min-width:1000px){
            width:33%;
    }
    
`;

export const Title = styled.p `
    font-size:30px;
    margin-top:60px;
    margin-bottom:60px;
    
`;

export const Description = styled.p `
    width:90%;
    line-height:30px;
`;

export const ContactDetailsContainer = styled.div `
    display:flex;
    margin:30px 0;
    
`;

export const Logo =styled.div `
    margin-right:20px;
    padding-top:3px;
`;

export const SubTitle =styled.div `
    margin-bottom:10px;
    font-weight:bold;
`;

export const Link =styled.a `
    text-decoration:none;
    color:${(props) =>props.color};;
`;

export const UserContactDetails =styled.div `
    @media (min-width:1000px){
            display:flex;
            justify-content:center;
        }
`;

export const ContactForm =styled.form `
    
    margin-bottom:60px;
    @media (min-width:1000px){
            width:65%;
    }
`;

export const Input =styled.input `
    display:block;
    width:100%;
    margin:20px 0;
    height:50px;
    padding-left:20px;
    font-size:18px;
    border-radius:5px;
    border-color:#a0a0a0;
    
    &::placeholder{        
        font-size:18px;
    }

    &:nth-child(2){
        @media (min-width:1000px){
            transform:translate(23px, 0);
        }
    }
`;


export const MessageForm =styled.textarea `
    display:block;
    width:100%;
    margin:20px 0;
    min-width:100%;
    height:150px;
    padding-left:20px;
    padding-top:20px;
    &::placeholder{
        font-size:18px;
    }
`;

export const SubmitButton = styled.button `
    width:200px;
    height:60px;
    border-radius:30px;
    font-size:18px;
    color: ${(props) =>props.color};
    border-color: ${(props) =>props.color};
    font-weight:bold;
    background:white;
    &:hover{
        color:white;
        background:${(props) =>props.color};
        cursor: pointer;
    }
`;
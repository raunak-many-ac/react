import styled from "styled-components";

export const Container = styled.div`
     /* margin-left: 40%; */
     margin-top: 15%;
     width: auto;
     flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-left: 37%;
    padding-right: 30%;


    @media(max-width: 768px){
     padding-left: 27%;
    padding-right: 20%;

    }
    @media(max-width: 550px){
          padding:0%;
     }
`;

export const H2 = styled.h2`
     padding-left: 25%;
     white-space: nowrap;

     @media(max-width: 768px){
          padding-left: 0%;
     }

     @media(max-width: 550px){
          padding-left: 30%;

     }
`;

export const Card = styled.div`
     box-shadow: rgb(225, 225, 225) 5px 5px 20px;
     transition: 0.3s;
     padding:20px;
     width: 100%;
     max-width: 400px;
     display: block;

     &:hover{
          box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
     }

     @media(max-width: 850px){
          padding:10px;

     }

     @media(max-width: 600px){
          padding:5px;
     }

     @media(max-width: 550px){
          max-width: 100%;
          padding:10px;

     }     
`;

export const Form = styled.form`
     display: flex;
     flex-direction: column;
`;

export const Input = styled.input`
         width: 100%;
    height: 38px;
    background: rgb(246, 246, 246);
    border: none;
    text-align: center;
    margin-bottom: 10px;
    border-radius: 8px;
`;

export const ButtonContainer = styled.div`
     display: flex;
     justify-content: space-around;
     margin-top: 5%;
`;

export const AuthButton = styled.button`
     width: 45%;
    padding: 10px;
    background-color: rgb(83, 187, 242);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    color: rgb(255, 255, 255);
    font-size: 20px;

    @media(max-width: 600px){
          font-size: 15px;
          font-weight: bold;
     }

     &:focus{
          outline: none;
     }
`;

export const MessageBar = styled.div`
     width: 100%;
     height: 50px;
     max-width: 400px;
     padding-top: 2%;
     color: white;
     text-align: center;
     font-weight: bold;
     vertical-align: middle;
     background-color: ${props => props.color};
     visibility: ${props => props.visible ? 'visible' : 'hidden'};

     @media(max-width: 650px){
          height: 70px;          
          padding:10px;

     }  

     @media(max-width: 550px){
          max-width: 100%;
          padding:10px;

     }  

     @media(max-width: 550px){
          max-width: 100%;
     }  
`;

export const U = styled.u`
     float: right;
     margin-right: 2%;
     cursor: pointer;
`;
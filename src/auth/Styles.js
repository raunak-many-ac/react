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
`;

export const H2 = styled.h2`
     padding-left: 25%;
     white-space: nowrap;

     @media(max-width: 768px){
          padding-left: 0%;
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

     @media(max-width: 500px){
          font-size: 10px;
          font-weight: bold;
     }

     @media(max-width: 30px){
          font-size: 5px;
          font-weight: bold;
     }
`;
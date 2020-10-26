import styled from "styled-components";

export const Container = styled.div`
        width: 100%;
        height: 100px;
        justify-content: space-around;
        background-color:${props => props.color};
        margin-top: 5%;
`;

export const ColorContainer = styled.div`
     display: flex;
     flex-direction: column;
     width: 180px;
     justify-content:space-between;
     margin-left: 45%;
     visibility: ${props => props.visible ? "visible" : "hidden"};
 `;

export const Red = styled.button`
     background-color: red;
     width:20px;
     height:20px;
     border-radius: 50%;
     border:none;
     margin-top: 2%;

 `;

export const Blue = styled.button`
     background-color: blue;
     width:20px;
     height:20px;
     padding:10px;
     border-radius: 50%;
     border:none;
     margin-top: 2%;
 `;

export const Green = styled.button`
     background-color: green;
     width:20px;
     height:20px;
     padding:10px;
     border-radius: 50%;
     border:none;
     margin-top: 2%;

 `;


export const Purple = styled.button`
     background-color: purple;
     width:20px;
     height:20px;
     padding:10px;
     border-radius: 50%;
     border:none;
     margin-top: 2%;

 `;

export const SettingsButton = styled.button`
     border:none;
     padding:10px;
     background-color: ${(props) => props.color};
     margin-left: 38%;
     outline: none;

     &:focus {
          outline: none;
     }
 `;
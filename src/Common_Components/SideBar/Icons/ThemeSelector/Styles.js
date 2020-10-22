import styled from "styled-components";


export const Container = styled.div`
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-around;
        background-color:${props => props.color};
        margin-top: 5%;
`;


export const Red = styled.span`
        width: 10%;
        height: 25%;
        background-color: red;        
`;

export const Blue = styled.span`
        width: 10%;
        height: 25%;
        background-color: blue;       
`;

export const Green = styled.span`
        width: 10%;
        height: 25%;
        background-color: green;       
`;

export const Purple = styled.span`
        width: 10%;
        height: 25%;
        background-color: purple;
`;


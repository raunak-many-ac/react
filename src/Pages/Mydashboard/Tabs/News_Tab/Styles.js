import styled from "styled-components";


export const Container = styled.div`
     height: auto;
     width: 100%;
     display: flex;
     justify-content: space-around;
`; 

export const Text = styled.h2`
     margin-top: 20%;
     color: ${props => props.color};
`;
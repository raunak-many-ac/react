import styled from 'styled-components';



export const WideCardContainer = styled.div`
     display: flex;
`;

export const WideCard = styled.div`
     background-color: aliceblue;
     width: 45%;
     height: 250px;
     margin-left: ${props => props.margin};
     background-image: url(${props => props.src});
     background-repeat: no-repeat;
     background-position: left 4em top;
     background-size: 100% 100%;

`;

export const WideCardBackground = styled.img`
     z-index: -5;
     width: 80%;
     height: 80%;
     float: right;
     background-color: red;
`;

export const FeatureText = styled.div`
        color: grey;
        font-family: Helvetica;
        z-index: 2;         
`;

export const CardTitle = styled.div`
        font-size: 40px;
        font-weight: 300;
        margin-bottom: 10%;
`;

export const TextContainer = styled.div`
     width: 100%;
     height: 100%;
     padding-left:10%; 
     z-index: 2;  
     float: left;
     /* background-color: green;        */

`;



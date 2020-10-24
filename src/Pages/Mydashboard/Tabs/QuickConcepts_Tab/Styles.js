
import styled from 'styled-components';
import {css} from "@emotion/core";


export const WideCardContainer = styled.div`
     display: flex;

     @media (max-width: 768px){
          flex-direction: column;
     }
`;

export const WideCard = styled.div`
     background-color: aliceblue;
     width: 50%;
     height: 250px;
     margin-left: ${props => props.margin};
     background-image: url(${props => props.src});
     background-repeat: no-repeat;
     background-position: left 4em top;
     background-size: 100% 100%;
     border-radius: 20px;
     overflow: hidden;

     @media (max-width: 768px){
          width: 100%;
          margin-left: 0px;
          margin-top: 5%;

     }
`;

export const FeatureText = styled.div`
        color: grey;
        font-family: Helvetica;     
`;

export const ExploreButton = styled.div`
     width: auto;
     height: 20%;
     border: none;
     padding-left: 10px;
     padding-right: 10px;
     padding-top: 5px;
     padding-bottom: 5px;
     background-color: white;
     border-radius: 8px;
     font-weight: bold;
`;

export const LargeCardTitle = styled.div`
        font-size: 22px;
        font-weight: bold;
        margin-bottom: 12%;
        margin-top: 3%;
        width: 60%;
`;

export const TextContainer = styled.div`
     width: 100%;
     height: 100%;
     padding-left:10%;      
     float: left;
`;

export const BottomCardContainer = styled.div`
     width: 100%;
     margin-top: 25%;
     display: flex;
     justify-content: space-between;
     padding-right: 20%;
`;

export const HorizontalCardContainer = styled.div`
     width: 100%;
     margin-top: 3%;
     display: flex;
     margin-bottom: 10%;
     justify-content: space-between;
     overflow: hidden;
`;

export const Card = styled.span`
     width:23%;
`;

export const ImageContainer = styled.img`
     width: 100%;
     /* src: url(${props => props.image}); */
`;

export const SmallCardTitle = styled.div`
     font-size: 17px;
     font-weight: bold;
     margin-bottom: 7%;
     margin-top: 7%;
     width: 80%;  
`;

export const TimeToRead = styled.span`
     font-size: 12px;
`;

export const LightText = styled.span`
     font-size: 12px;
     opacity: 0.5;
     margin-left: 1%;
`;


//..Loading animation css from here
export const LoaderContainer = styled.div`
        width: 100%;
        height: 350px;
        display: flex;
`;

export const loaderCss = css`
        margin-top: 20%;
        margin-left: 40%;
`;
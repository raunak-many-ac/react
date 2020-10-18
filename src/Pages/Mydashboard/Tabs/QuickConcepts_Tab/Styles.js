import styled from 'styled-components';


export const WideCardContainer = styled.div`
     display: flex;
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
`;

export const FeatureText = styled.div`
        color: grey;
        font-family: Helvetica;      
        margin-top: 10%;  
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
`;

export const HorizontalCardContainer = styled.div`
     width: 100%;
     margin-top: 3%;
     display: flex;
`;

export const Card = styled.span`
     margin-left: ${props => props.margin};
     width:25%;
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

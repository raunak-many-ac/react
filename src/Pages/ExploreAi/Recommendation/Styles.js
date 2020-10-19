import styled from 'styled-components';

export const Container = styled.div`
     scroll-behavior: smooth;
     width: 40%;
`;

export const IconContainer = styled.ul`
     float: right;
     display: flex;
     padding-bottom: 0;
     margin-bottom: 0;
`;

export const StyledCard = styled.div`
     margin-left: 30%;
     box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
     transition: 0.3s;
     padding:5% 15% 5% 5%;
     border-radius: 20px;

     &:hover{
          box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
     }
`;

export const YouMightLike = styled.p`
     margin-left: 30%;
     color: grey;
     opacity: 50%;
     font-family: Helvetica;
`;

export const FeatureText = styled.div`
        color: grey;
        font-family: Helvetica;
        
`;

export const Title = styled.div`
        font-size: 20px;
        font-weight: bold;
        margin-top: 10%;
`;

export const SourceText = styled.div`
        margin-top: 5%;
        font-family: Helvetica;
        opacity: 30%;
        font-style: italic;
        font-size: 14px;
`;

export const HorizontalLine = styled.hr`
     margin-top: 11.6%;
     padding-top: 0;     
`;

     




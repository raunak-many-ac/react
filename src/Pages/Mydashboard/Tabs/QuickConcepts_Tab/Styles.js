import styled from 'styled-components';

export const WideCardContainer = styled.div`
     display: flex;
`;

export const WideCard = styled.div`
     background-color: aliceblue;
     width: 45%;
     height: 300px;
     margin-left: ${props => props.margin};
     background-image: ${props => props.image};
     z-index: 1;
`;

export const WideCardBackground = styled.img`
     z-index: -5;
`;

export const FeatureText = styled.div`
        color: grey;
        font-family: Helvetica;
        z-index: 2;
        
          
`;

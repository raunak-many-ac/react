import styled from 'styled-components';

export const SmoothScroller = styled.div`
     scroll-behavior: smooth;
     width: 60%;
`;

export const StyledSection = styled.section`
     /* height: 500px; */
`;

export const StyledTabContainer = styled.ul`
     display: flex;
     margin-left: 0;
     padding-left: 0;
     margin-bottom: 0;
     justify-content: space-around;

`;

export const StyledTab = styled.li`
     list-style: none;
     
`;

export const A = styled.a`
     color: black;
     width: 100%;
     height: 100%;
     font-weight: 500;
     &:hover{
          color: black;
          text-decoration: none;
     }
`;

export const HighLightLine = styled.hr`
     background-color: ${props => props.color};
     height: 2px;
     width: 100%;
     margin-bottom: 0;
     visibility: ${props => props.visible ? "visible": "hidden" };
`;

export const HorizontalLine = styled.hr`
    
     margin-top: 0;
     padding-top: 0;
     
`;

     




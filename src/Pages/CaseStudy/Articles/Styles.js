import styled from 'styled-components';
import {css} from "@emotion/core";


export const SmoothScroller = styled.div`
     scroll-behavior: smooth;
     width: 90%;
`;

export const StyledSection = styled.section`
     width: 100%;
`;

export const StyledTabContainer = styled.ul`
     display: flex;
     margin-left: 0;
     padding-left: 0;
     margin-bottom: 0;
     justify-content: space-around;
     width: 100%;
`;

export const VideoPlayerContainer = styled.div`
     width: 100%;
     height: 20%;
     border-radius: 5%;
     margin-bottom: 5%;
     overflow: hidden;
     border: none;
     border-color: white;

     @media(max-width: 1000px){
          border-radius: 10%;
     }

     @media(max-width: 768px){
          border-radius: 8%;
          
     }

     @media(max-width: 550px){
          border-radius: 8%;
          height: 15%;
     }

     @media(max-width: 450px){
          border-radius: 8%;
          height: 10%;
     }
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
     width: 150%;
     margin-top: 0;
     padding-top: 0;
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

export const P = styled.p`
     font-size: 14px;
    line-height: 1.57;
    color: rgb(60, 64, 114);
`;   




import styled from 'styled-components';

export const Svg = styled.svg`
        
`;


export const Logo = styled.img`
        padding-bottom: 8%;
        margin-left: 15%;
        margin-top: 8%;  
        height: 65px;
        width: 50px;

        @media (max-width: 1200px){
                height: 55px;
                width: 40px;
        }

        @media (max-width: 900px){
                height: 45px;
                width: 30px;
        }
`;

export const BrandName = styled.span`
        font-size: 1.4em;
        color: ${props => props.color};
        margin-top: 8%;
        font-weight: bolder;

        @media (max-width: 1200px){
                font-size: 1.2em;
        }

        @media (max-width: 1050px){
                font-size: 1em;
        }

        @media (max-width: 900px){
                font-size: 0.8em;
        }
 `;

export const StyledNavItem = styled.div`
        height: 70px;
        width: 100%; /* width must be same size as NavBar to center */
        text-align: center; /* Aligns <a> inside of NavIcon div */
        margin-bottom: 0;   /* Puts space between NavItems */

        a {
        font-size: 2.7em;
        color: ${(props) => props.active ? "white" : "#9FFFCB"};
                :hover {
                        opacity: 0.7;
                        text-decoration: none; /* Gets rid of underlining of icons */
                }  
        }
        
`;


export const StyledSideNav = styled.div` 
        position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
        height: 100%;
        width: 14%;     /* Set the width of the sidebar */
        z-index: 1;      /* Stay on top of everything */
        background-color: ${props => props.color};
        overflow-x: hidden;     /* Disable horizontal scroll */
        
        @media  (max-width: 768px) {
                display: none;
        } 
        
`;
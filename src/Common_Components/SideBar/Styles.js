import styled from 'styled-components';



export const Svg = styled.svg`
        margin-left: 100%;
`;


export const Logo = styled.img`
        
        padding-bottom: 8%;
        margin-left: 15%;
        margin-top: 8%;
          
`;

export const BrandName = styled.span`
        font-size: 1.4em;
        color: #0f0552;
        margin-top: 8%;
 `;

export const StyledNavItem = styled.div`
height: 70px;
width: 75px; /* width must be same size as NavBar to center */
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
        /* background-color:  #ECECFF; */
        background-color: ${props => props.color};
        overflow-x: hidden;     /* Disable horizontal scroll */
        
        .side-icon{
            margin-left: 100%;
        }

`;
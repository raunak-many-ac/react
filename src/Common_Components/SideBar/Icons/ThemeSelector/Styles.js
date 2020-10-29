import styled from "styled-components";

export const Container = styled.div`
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

export const ColorContainer = styled.div`
     display: flex;
     flex-direction: column;
     width: 180px;
     justify-content:space-between;
     margin-left: 45%;
     visibility: ${props => props.visible ? "visible" : "hidden"};
 `;

export const Red = styled.button`
     background-color: red;
     width:20px;
     height:20px;
     border-radius: 50%;
     border:none;
     margin-top: 2%;
     &:focus{
          outline: none;
     }

 `;

export const Blue = styled.button`
     background-color: blue;
     width:20px;
     height:20px;
     padding:10px;
     border-radius: 50%;
     border:none;
     margin-top: 2%;
     &:focus{
          outline: none;
     }

 `;

export const Green = styled.button`
     background-color: green;
     width:20px;
     height:20px;
     padding:10px;
     border-radius: 50%;
     border:none;
     margin-top: 2%;
     &:focus{
          outline: none;
     }


 `;


export const Purple = styled.button`
     background-color: purple;
     width:20px;
     height:20px;
     padding:10px;
     border-radius: 50%;
     border:none;
     margin-top: 2%;

     &:focus{
          outline: none;
     }

 `;

export const SettingsButton = styled.button`
     border:none;
     background-color: ${(props) => props.color};
     margin-top: 8%;
     outline: none;

     &:focus {
          outline: none;
     }
 `;
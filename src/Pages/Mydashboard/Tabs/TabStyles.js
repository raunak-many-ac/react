import styled from 'styled-components';

export const StyledTabContainer = styled.ul`
     list-style: none;
     
     padding-left: 0;
`;

export const ActiveTab = styled.button`
     display: inline;
     margin-left: 0;
     background-color: #11142f;
     color: white;
     font-family: Arial;
     border-radius: 15px;
     padding-left: 2%;
     padding-right: 2%;
     padding-top: 0.5%;
     padding-bottom: 0.5%;
     border: none;
     outline: none;
     outline-width: 0;
     box-shadow: none;
     margin-left: ${props => props.margin};
`;

export const InactiveTab = styled.button`
     display: inline;
     margin-left: 0;
     background-color: aliceblue;
     color: black;
     font-family: Arial;
     border-radius: 15px;
     padding-left: 2%;
     padding-right: 2%;
     padding-top: 0.5%;
     padding-bottom: 0.5%;
     border: none;
     outline: none;
     outline-width: 0;
     box-shadow: none;
     margin-left: ${props => props.margin};
`;

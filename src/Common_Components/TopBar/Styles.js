import styled from 'styled-components';

export const CircularImage = styled.img`
    border-radius: 40px;
    border-width: 1;
    overflow: 'hidden';
    height: 40px;
    width: 40px;
`;

export const ProfileContainer = styled.div`
    float: right;
`;


export const LogOut = styled.span`
        color: grey;
`;

export const TabNameDiv = styled.span`
    width: 30%;   
    margin-left: 10%;
    font-family: Helvetica;
    background-color: #fff;
    border: none;
    background: none;
    outline:none;
    color: grey; 
    white-space: nowrap;

    @media (max-width: 768px){
        margin-left: 5%;
    }
`;

export const TopbarContainer = styled.div` 
    background-color: #fff; 
    margin-left: 14%;
    padding-right: 10%;
    padding-top: 1%;

    @media (max-width: 1400px){
        width: 85%;
        padding-right: 0%;
    }

    @media (max-width: 1000px){
        
        padding-right: 0em;
    }

    @media (max-width: 768px){
        margin-left: 0%;
        width: 100%;
        padding-right: 3%;

    }
`;
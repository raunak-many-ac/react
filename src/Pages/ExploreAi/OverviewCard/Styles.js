import styled from"styled-components";
import {css} from "@emotion/core";


export const CardContainer = styled.div`
        width: 100%;
        height: auto;
        overflow: hidden;
        margin-bottom: 5%;
`;

export const TextContainer = styled.div`
        margin-top: 5%;
        width: 60%;
        float: left;
`;

export const Image = styled.img`
        float: right;
        width: 30%;
        height: 90%;
`;

export const FeatureText = styled.div`
        color: grey;
        font-family: Helvetica;
`;

export const Title = styled.div`
        font-size: 40px;
        font-weight: 500;
        margin-top: 5%;
`;

export const Source = styled.div`
        margin-top: 3%;
        font-family: Helvetica;
        opacity: 30%;
        font-style: italic;
        font-size: 14px;
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

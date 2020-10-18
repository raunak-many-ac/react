import styled from 'styled-components';


export const CarousalContainer = styled.div`
        width: 100%;
        height: 300px;
        overflow: hidden;

        .slick-dots {
                float: left;
                padding-right: 90%;
                padding-bottom: 10%;
                
        }
`;

export const SliderText = styled.div`
        margin-top: 5%;
        width: 60%;
        float: left;
`;

export const SliderImage = styled.img`
        float: right;
        width: 30%;
        height: 30%;
`;

export const SliderItem = styled.div`
        width: 100%;
        height: 80%;
        margin-bottom: 10%;
`;

export const FeatureText = styled.div`
        color: grey;
        font-family: Helvetica;
`;

export const SliderTitle = styled.div`
        font-size: 40px;
        font-weight: 500;
        margin-top: 5%;
`;

export const ViewCaseStudy = styled.div`
        margin-top: 5%;
        color: ${props => props.color};
        font-weight: bold;
`;
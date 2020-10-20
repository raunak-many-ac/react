import styled from 'styled-components';


export const CarousalContainer = styled.div`
        width: 100%;
        height: auto;
        overflow: hidden;

        

        .slick-dots {
                float: left;
                padding-right: 90%;
                margin-bottom: 10%;    
                display: inline;
                height: 10px;

                @media (max-width: 1440px){
                        padding-right: 88%;
                        margin-bottom:10%;
                }

                @media (max-width: 1300px){
                        padding-right: 85%;
                        margin-bottom:10%;
                }

                @media (max-width: 1000px){
                        padding-right: 82%;
                        margin-bottom:10%;
                }
                

                @media (max-width: 800px){
                        padding-right: 78%;
                        margin-bottom:13%;
                }

                @media (max-width: 500px){
                        padding-right: 60%;
                        margin-bottom:18%;
                }
        }

        @media (max-width: 768px){
                height: auto;                        
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
        margin-bottom: 8%;
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
import React from 'react';
import profile from "../../../assets/ai.png";
import Slider from "react-slick";
import { ThemeContext } from "../../../Theme";

import { CarousalContainer, SliderText, SliderImage, SliderItem, FeatureText, SliderTitle, ViewCaseStudy } from "./Styles";
import ArrowRight from "./Arrow_Right";

export default class Carousal extends React.Component {

  static contextType = ThemeContext;

  settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    className: "slides",
    
    
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    }]
  };

  render() {

    const { darkColor } = this.context;


    return (
        <CarousalContainer>
          <Slider {...this.settings}>

            <SliderItem>
              <SliderText>

                <FeatureText>Featured1</FeatureText>
                <SliderTitle>Role of Ai in huimanizing Digital banking</SliderTitle>
                <ViewCaseStudy color={darkColor}>View Case study <ArrowRight /> </ViewCaseStudy>

              </SliderText>
              <SliderImage src={profile} />
            </SliderItem>

            <SliderItem>
              <SliderText>

                <FeatureText>Featured2</FeatureText>
                <SliderTitle>Role of Ai in huimanizing Digital banking</SliderTitle>
                <ViewCaseStudy color={darkColor}>View Case study <ArrowRight /> </ViewCaseStudy>

              </SliderText>
              <SliderImage src={profile} />
            </SliderItem>

            <SliderItem>
              <SliderText>

                <FeatureText>Featured3</FeatureText>
                <SliderTitle>Role of Ai in huimanizing Digital banking</SliderTitle>
                <ViewCaseStudy color={darkColor}>View Case study <ArrowRight/> </ViewCaseStudy>

              </SliderText>
              <SliderImage src={profile} />
            </SliderItem>

          </Slider>
        </CarousalContainer>        
    )
  }
} 
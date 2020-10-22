import React from 'react';
import profile from "../../../assets/ai.png";
import Slider from "react-slick";
import {RiseLoader} from "react-spinners";

import { ThemeContext } from "../../../Theme";

import { CarousalContainer, SliderText, SliderImage, SliderItem, FeatureText, SliderTitle, ViewCaseStudy  } from "./Styles";
import {LoaderContainer, loaderCss} from "./Styles";

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

  data =  [
    
  ]
  

  render() {

    const { darkColor } = this.context;
    // console.log(this.props.carousal);
    if(this.props.data == undefined)
    {
      return(
        <LoaderContainer>
          <RiseLoader css = {loaderCss} size = {20} color ={darkColor} loading />
        </LoaderContainer>
      );
    }

    this.data = this.props.data;

    return (
        <CarousalContainer>
          <Slider {...this.settings}>

            {
              this.data.map(slide => {
               return(
                <SliderItem>
                  <SliderText>

                    <FeatureText>{slide.feature}</FeatureText>
                    <SliderTitle>{slide.title}</SliderTitle>
                    <ViewCaseStudy color={darkColor}>View Case study <ArrowRight /> </ViewCaseStudy>

                  </SliderText>
                  <SliderImage src={profile} />
                </SliderItem>
               )
              })
            }
            

          </Slider>
        </CarousalContainer>        
    )
  }
} 
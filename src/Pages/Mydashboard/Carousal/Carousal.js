import React from 'react';
import profile from "../../../assets/ai.png";
import Slider from "react-slick";
import { RiseLoader } from "react-spinners";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { ThemeContext } from "../../../Theme";

import { CarousalContainer, SliderText, SliderImage, SliderItem, FeatureText, SliderTitle, ViewCaseStudy } from "./Styles";
import { LoaderContainer, loaderCss } from "./Styles";

import ArrowRight from "./Arrow_Right";


class Carousal extends React.Component {

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

  data = [

  ]

  goToCaseStudyPage = (id) => {
    console.log("here is the id of the slide " + id);

    this.props.history.push({
      pathname: "/casestudy",
      state: id
    })
  }

  render() {

    const { darkColor } = this.context;

    if (!this.props.data) //..no data show loading
    {
      return (
        <LoaderContainer>
          <RiseLoader css={loaderCss} size={20} color={darkColor} loading />
        </LoaderContainer>
      );
    }

    this.data = this.props.data;
    console.log(this.data);
    return (
      <CarousalContainer>
        <Slider {...this.settings}>

          {


            this.props.data.map(slide => {

              console.log("slide == " + slide);
              return (
                <SliderItem>
                  <SliderText>

                    <FeatureText>{slide.feature}</FeatureText>
                    <SliderTitle>{slide.title}</SliderTitle>

                    <div onClick={() => this.goToCaseStudyPage(slide.id)}>
                      <ViewCaseStudy color={darkColor}>View Case study <ArrowRight /> </ViewCaseStudy>
                    </div>

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

export default withRouter(Carousal);
//..to = {{pathname: "/casestudy", state: id}}
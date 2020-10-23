import React from "react";
import image from "../../../assets/ai.png";
import {RiseLoader} from "react-spinners";


import { CardContainer, TextContainer, Image,  FeatureText, Title, Source} from "./Styles";
import {LoaderContainer, loaderCss} from "./Styles";
import { ThemeContext } from "../../../Theme";




export default class OverviewCard extends React.Component {
  static contextType = ThemeContext;

  render() {
    const { darkColor } = this.context;
    // console.log(this.props);

    if(this.props.feature == undefined){
      return(
        <LoaderContainer>
          <RiseLoader css = {loaderCss} size = {20} color ={darkColor} loading />
        </LoaderContainer>
      );
    }

    return (
        <CardContainer>

              <TextContainer>
                <FeatureText>{this.props.feature}</FeatureText>
                <Title>{this.props.title}</Title>
                <Source>{this.props.source}</Source>
              </TextContainer>

              <Image src={image} />
            
        </CardContainer>        
    )
  }
} 
import React from "react";
import image from "../../../assets/ai.png";

import { CardContainer, TextContainer, Image,  FeatureText, Title, Source} from "./Styles";


export default class OverviewCard extends React.Component {

  render() {
    return (
        <CardContainer>

              <TextContainer>
                <FeatureText>Featured1</FeatureText>
                <Title>Role of Ai in huimanizing Digital banking</Title>
                <Source>Bigdata Team, Aug 2020</Source>
              </TextContainer>

              <Image src={image} />
            
        </CardContainer>        
    )
  }
} 
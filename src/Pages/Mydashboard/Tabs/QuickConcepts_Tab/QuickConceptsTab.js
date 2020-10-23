import React from 'react';
import { RiseLoader } from "react-spinners";
import { ThemeContext } from "../../../../Theme";

import background from "../../../../assets/image_card_ml.svg";
import img1 from "../../../../assets/image_quickconcepts_ml.png";
import img2 from "../../../../assets/image_quickconcepts_ml2.png";
import img3 from "../../../../assets/image_quickconcepts_ml3.png";
import img4 from "../../../../assets/image_quickconcepts_ml4.png";

import { WideCardContainer, WideCard, TextContainer, FeatureText, LargeCardTitle, BottomCardContainer } from "./Styles";
import { HorizontalCardContainer, Card, SmallCardTitle, TimeToRead, LightText, ImageContainer } from "./Styles";

import { LoaderContainer, loaderCss } from "./Styles";

const pathToImageMap = {
     "image_quickconcepts_ml.png": img1,
     "image_quickconcepts_ml2.png": img2,
     "image_quickconcepts_ml3.png": img3,
     "image_quickconcepts_ml4.png": img4
}

class QuickConceptsTab extends React.Component {
     static contextType = ThemeContext;
     data = {}

     render() {
          const { darkColor } = this.context;

          console.log(this.props);
          if (this.props.cards == undefined) {
               return (
                    <LoaderContainer>
                         <RiseLoader css={loaderCss} size={20} color={darkColor} loading />
                    </LoaderContainer>
               );
          }

          this.data.wideCards = this.props.wideCards;
          this.data.cards = this.props.cards;

          return (
               <div>
                    <WideCardContainer>
                         {
                              this.data.wideCards.map((item =>

                                   <WideCard margin={item.margin} src={background} >
                                        <TextContainer>
                                             <FeatureText>{item.feature}</FeatureText>
                                             <LargeCardTitle>{item.title}</LargeCardTitle>
                                             <BottomCardContainer><FeatureText>{item.time + " read"}</FeatureText></BottomCardContainer>
                                        </TextContainer>
                                   </WideCard>

                              ))
                         }
                    </WideCardContainer>

                    <HorizontalCardContainer>
                         {
                              this.data.cards.map((item =>

                                   <Card margin={item.margin}>
                                        <ImageContainer src={pathToImageMap[item.src]} />
                                        <SmallCardTitle>{item.title}</SmallCardTitle>
                                        <TimeToRead>{item.time} read</TimeToRead>
                                        <LightText>{item.source}</LightText>

                                   </Card>

                              ))
                         }
                    </HorizontalCardContainer>
               </div>
          );

     }
}

export default QuickConceptsTab;
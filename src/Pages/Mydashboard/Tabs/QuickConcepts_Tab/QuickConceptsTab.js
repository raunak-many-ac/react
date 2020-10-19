import React from 'react';
import background from "../../../../assets/image_card_ml.svg";
import img1 from "../../../../assets/image_quickconcepts_ml.png";
import img2 from "../../../../assets/image_quickconcepts_ml2.png";
import img3 from "../../../../assets/image_quickconcepts_ml3.png";
import img4 from "../../../../assets/image_quickconcepts_ml4.png";

import { WideCardContainer, WideCard, TextContainer, FeatureText, LargeCardTitle, BottomCardContainer } from "./Styles";
import { HorizontalCardContainer, Card, SmallCardTitle, TimeToRead, LightText } from "./Styles";


class QuickConceptsTab extends React.Component {

     data = {
          wideCards: [
               {
                    feature: "Quick Learn",
                    title: "Machine Learning vs Deep Learning",
                    time: "10 min",
                    margin: "0%"
               },
               {
                    feature: "Quick Learn",
                    title: "Machine Learning vs Deep Learning",
                    time: "5 min",
                    margin: "3%"

               }
          ],

          cards: [
               {
                    src: img1,
                    title: "How business needs to change to be AI ready?",
                    time: "6 min",
                    source: "Bussiness Insider",
                    margin: "0%"
               },
               {
                    src: img2,
                    title: "Is neuralink actually gonna save world?",
                    time: "10 min",
                    source: "Medium",
                    margin: "2%"
               },
               {
                    src: img3,
                    title: "A primer on Artificial Intelligence (AI)",
                    time: "5 min",
                    source: "Hackernoon",
                    margin: "2%"

               },
               {
                    src: img4,
                    title: "Machine learning vs Deep learning",
                    time: "8 min",
                    source: "Medium",
                    margin: "2%"
               },
          ]
     }

     render() {

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
                                        <img src={item.src} />
                                        <SmallCardTitle>{item.title}</SmallCardTitle>
                                        <TimeToRead>{item.time} read</TimeToRead>
                                        <LightText>{item.source}</LightText>

                                   </Card >

                              ))
                         }
                    </HorizontalCardContainer>
               </div>
          );

     }
}

export default QuickConceptsTab;